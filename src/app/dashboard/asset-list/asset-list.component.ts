import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../services/user.service";
import {assetService} from "../../services/asset.service";
import {logService} from "../../services/log.service";
import {fileService} from "../../services/file.service";
import {wareService} from "../../services/ware.service";
import {Router} from "@angular/router";
import {AssetApply, AssetApplyBO, AssetList} from "../../model/User";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
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
    assetName: null,
    assetId: null,
    warehouseName: null,
    status: null,
  }
  dateFormat = 'yyyy-MM-dd HH:mm:ss';
  asset_list = new Array<AssetList>();
  current_edit:AssetApplyBO;
  title = '资产采购申请';
  ngOnInit() {
    this.search();
  }
  show_create_asset = false;

  handleCancel() {
    this.show_create_asset = false;
  }

  handleOk() {
    const startTime = new DatePipe('en').transform(this.current_edit.startTime, 'yyyy-MM-dd HH:mm:ss');
    const endTime = new DatePipe('en').transform(this.current_edit.endTime, 'yyyy-MM-dd HH:mm:ss');
    this.current_edit.startTime = startTime;
    this.current_edit.endTime = endTime;
    // this.current_edit.startTime.replace("T"," ");
    // this.current_edit.endTime.replace("T"," ");
    // 2021-05-20T18:20:58.250Z
    this.asset_service.postApply({...this.current_edit}).subscribe(res => {
      if (res.code === 2000){
        this.show_create_asset = false;
        this.nz_message.success("操作成功!");
        console.log(res);
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }

  search() {
    this.asset_service.assetList({
      ...this.search_params
    }).subscribe( res => {
      if(res.code === 200){
        this.asset_list = res.result;
      }else {
        this.nz_message.error("获取信息失败!");
      }
    })
  }
  type = '';
  show_dialog(type: string,data: AssetList) {
    console.log(data);
    this.current_edit = new AssetApplyBO(data);
    console.log(this.current_edit);
    this.show_create_asset = true;
    this.type = type;
    if(type === 'detail'){
      this.title = "资产详情";
    }else if (type === 'borrow') {
      this.title = "资产借用";
      this.current_edit.type = 1;
    }else if (type === 'apply') {
      this.title = "资产申领";
      this.current_edit.type = 2;
    }else if (type === 'use') {
      this.title = "资产使用";
      this.current_edit.type = 3;

    }else if (type === 'fallback') {
      this.title = "资产反馈";
      this.current_edit.type = 4;

    }else {

    }
  }

  clear_search() {
    this.search_params = {
      currPage: 0,
      pageSize : 10,
      assetName: null,
      assetId: null,
      warehouseName: null,
      status: null,
    }
  }
}
