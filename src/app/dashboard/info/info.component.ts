import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {userService} from "../../services/user.service";
import {assetService} from "../../services/asset.service";
import {logService} from "../../services/log.service";
import {fileService} from "../../services/file.service";
import {wareService} from "../../services/ware.service";
import {Router} from "@angular/router";
import {User} from "../../model/User";

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

  }
  user = new User(); // 个人信息
  asset_use_history = [];//资产使用历史
  show_edit_info = false;

  edit_user() {
    this.user_service.modifyUser({...this.user}).subscribe(res =>{
      if (res.code === 200){
        this.nz_message.success("修改成功!");
        this.show_edit_info = false;
      }else {
        this.nz_message.error("修改失败!");
      }
    })
  }

  handleCancel() {
    this.show_edit_info = false;
  }

  handleOk() {

  }
}
