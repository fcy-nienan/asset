import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../../services/user.service";
import {assetService} from "../../../services/asset.service";
import {logService} from "../../../services/log.service";
import {AnyObject, fileService} from "../../../services/file.service";
import {wareService} from "../../../services/ware.service";
import {Router} from "@angular/router";
import {AssetApplyList, OperLog} from "../../../model/User";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss']
})
export class OperationListComponent implements OnInit {

  constructor(private nz_message: NzMessageService,
              public user_service: userService,
              public asset_service: assetService,
              public log_service: logService,
              public file_service: fileService,
              public ware_service: wareService,
              private router: Router) {

  }


  dateFormat = 'yyyy-MM-dd HH:mm:ss';

  search_params = {
    currPage: 0,
    pageSize : 10,
    userName: null,
    dataFrom: null,
    dataEnd: null,
  }
  ngOnInit() {
    this.search();
  }
  oper_log_list =  new Array<OperLog>();
  clear_search(): void {
    this.search_params = {
      currPage: 0,
      pageSize : 10,
      userName: null,
      dataFrom: null,
      dataEnd: null,
    }
  }
  search(): void {
    const dataFrom = new DatePipe('en').transform(this.search_params.dataFrom, 'yyyy-MM-dd HH:mm:ss');
    const dataEnd = new DatePipe('en').transform(this.search_params.dataEnd, 'yyyy-MM-dd HH:mm:ss');
    this.search_params.dataFrom = dataFrom;
    this.search_params.dataEnd = dataEnd;
    this.log_service.assetLogList(this.search_params).subscribe(res =>{
      if (res.code === 200){
        this.oper_log_list = res.result;
      }else {
        this.nz_message.error("获取数据错误!");
      }
    });
  }

}
