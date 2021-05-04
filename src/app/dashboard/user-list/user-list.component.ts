import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../services/user.service";
import {assetService} from "../../services/asset.service";
import {logService} from "../../services/log.service";
import {AnyObject, fileService} from "../../services/file.service";
import {wareService} from "../../services/ware.service";
import {Router} from "@angular/router";
import {UserList, WareHouse} from "../../model/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private nz_message: NzMessageService,
              public user_service: userService,
              public asset_service: assetService,
              public log_service: logService,
              public file_service: fileService,
              public ware_service: wareService,
              private router: Router) {

  }


  search_params = {
    currPage: 0,
    pageSize : 10,
    id: null,
    jobLevel: null,
    userName: null,
    telephone: null,
    email: null,
    status: null,
  }
  ngOnInit() {
    this.search();
  }
  user_list = new Array<UserList>();
  clear_search(): void {
    this.search_params = {
      currPage: 0,
      pageSize : 10,
      id: null,
      jobLevel: null,
      userName: null,
      telephone: null,
      email: null,
      status: null,
    }
  }
  search(): void {
    this.user_service.userList(this.search_params).subscribe(res =>{
      if (res.code === 200){
        this.user_list = res.result;
      }else {
        this.nz_message.error("获取数据错误!");
      }
    });
  }

  title = "编辑用户";
  show_edit = false;
  current_user:   AnyObject = {};
  show_deit_user(data: WareHouse) {
    this.title = "编辑用户";
    this.show_edit = true;
    this.current_user = this.file_service.deepCopy(data);
  }
  add_user(){
    this.title = "添加用户";
    this.show_edit = true;
  }
  confirm_add_user(){
    this.user_service.addUser({...this.current_user}).subscribe(res=>{
      if (res.code === 200){
        this.nz_message.success("编辑成功!");
        this.show_edit = false;
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
  user_detail(data: UserList){
    this.user_service.userDetail({...data}).subscribe(res=>{
      if (res.code === 200){
        this.current_user = res.result;
        this.show_edit = true;
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }

  confirm_edit() {
    this.user_service.modifyUser({...this.current_user}).subscribe(res=>{
      if (res.code === 200){
        this.nz_message.success("编辑成功!");
        this.show_edit = false;
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }

  handleCancel() {
    this.show_edit = false;
  }

  delete_user(data: WareHouse) {
    this.user_service.removeUser({...this.current_user}).subscribe(res => {
      if (res.code === 200){
        this.nz_message.success("刪除成功!");
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }

  click_add_user() {
    this.show_edit = true;
  }
}
