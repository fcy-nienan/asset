import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../services/user.service";
import {assetService} from "../../services/asset.service";
import {logService} from "../../services/log.service";
import {AnyObject, fileService} from "../../services/file.service";
import {wareService} from "../../services/ware.service";
import {Router} from "@angular/router";
import {AssetApplyList, OperLog, WareHouse} from "../../model/User";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

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
    assetId: null,
    userName: null,
    status: null,
    telephone: null,
    jobLevel: null,
  }
  ngOnInit() {
    this.search();
  }
  asset_apply_list =  new Array<AssetApplyList>();
  clear_search(): void {
    this.search_params = {
      currPage: 0,
      pageSize : 10,
      assetId: null,
      userName: null,
      status: null,
      telephone: null,
      jobLevel: null,
    }
  }
  search(): void {
    this.asset_service.assetLogList(this.search_params).subscribe(res =>{
      if (res.code === 200){
        this.asset_apply_list = res.result;
      }else {
        this.nz_message.error("获取数据错误!");
      }
    });
  }

  agree(data: AssetApplyList) {
    this.asset_service.agreeApply({applyId:data.id}).subscribe(res=>{
      if (res.code === 200){
        this.nz_message.success("操作成功!");
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }

  dis_agree(data: AssetApplyList) {
    this.asset_service.disagreeApply({applyId:data.id}).subscribe(res=>{
      if (res.code === 200){
        this.nz_message.success("操作成功!");
        this.search();
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
  current_view_apply_detail: AnyObject = {};
  apply_detail(data: AssetApplyList) {
    this.asset_service.assetApplyDetail({applyId:data.assetId}).subscribe(res=>{
      if (res.code === 200){
        this.current_view_apply_detail = this.file_service.deepCopy(res.result);
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }















}
