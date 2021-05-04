import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../services/user.service";
import {assetService} from "../../services/asset.service";
import {logService} from "../../services/log.service";
import {fileService} from "../../services/file.service";
import {wareService} from "../../services/ware.service";
import {Router} from "@angular/router";
import {AssetUseHistory, User, UserDetail} from "../../model/User";
import {interval} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private nz_message: NzMessageService,
              public user_service: userService,
              public asset_service: assetService,
              public log_service: logService,
              public file_service: fileService,
              public ware_service: wareService,
              private router: Router) { }
  ngOnInit() {
    this.get_current_user_info();
  }
  show_edit_info = false;
  show_change_password = false;


  userDetail = new UserDetail();
  editUserDetail = new UserDetail();
  edit_user() {
    this.user_service.modifyUser({...this.userDetail}).subscribe(res =>{
      if (res.code === 200){
        this.nz_message.success("修改成功!");

        this.userDetail.email = this.editUserDetail.email;
        this.userDetail.telephone = this.editUserDetail.telephone;
        this.userDetail.userName = this.editUserDetail.userName;
        this.userDetail.signature = this.editUserDetail.signature;

        this.show_edit_info = false;
      }else {
        this.nz_message.error(res.msg);
        // this.nz_message.error("修改失败!");
      }
    })
  }
  get_current_user_info(){
    const userId = JSON.parse(localStorage.getItem("current_user")).id
    this.user_service.personalZone({id:userId}).subscribe(res => {
      console.log(res);
      this.userDetail = res.result;
      this.editUserDetail = this.userDetail;
      console.log(this.userDetail);
    })
  }

  handleCancel() {
    this.show_edit_info = false;
    this.editUserDetail = this.userDetail;
  }

  handleOk() {
    console.log(this.userDetail);
    this.edit_user();
  }
  email_code: string;
  has_send_code = false;
  send_code_timeout = 60;
  password: string;
  confirm_password: string;
  count_down(): void {
    interval(1000)
      .pipe(take( this.send_code_timeout))
      .subscribe({
        next: (value: number) => {
          this.has_send_code = true ;
          console.log(value);
          this.send_code_timeout = this.send_code_timeout - 1;
        },
        error: null,
        complete: () => {
          this.has_send_code = false;
          this.send_code_timeout = 60;
        }
      });
  }
  forget_password_send_code() {
    this.user_service.send_code({email:this.userDetail.email}).subscribe(res => {
      if(res.code === 200) {
        this.nz_message.success("验证码已发送!");
        this.count_down();
      }else {
        this.nz_message.warning("验证码发送失败!");
      }
    })
  }
  change_password(): void {
    this.user_service.change_password({
      email: this.userDetail.email,
      code: this.email_code,
      password: this.password
    }).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.nz_message.success("密码修改成功!");
        this.show_change_password = false;
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
}
