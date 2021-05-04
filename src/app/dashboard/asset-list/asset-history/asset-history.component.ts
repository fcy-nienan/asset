import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../../services/user.service";
import {assetService} from "../../../services/asset.service";
import {logService} from "../../../services/log.service";
import {fileService} from "../../../services/file.service";
import {wareService} from "../../../services/ware.service";
import {Router} from "@angular/router";
import {AssetUseHistory} from "../../../model/User";

@Component({
  selector: 'app-asset-history',
  templateUrl: './asset-history.component.html',
  styleUrls: ['./asset-history.component.scss']
})
export class AssetHistoryComponent implements OnInit {

  constructor(private nz_message: NzMessageService,
              public user_service: userService,
              public asset_service: assetService,
              public log_service: logService,
              public file_service: fileService,
              public ware_service: wareService,
              private router: Router) {

  }
  asset_info_history = new Array<AssetUseHistory>();
  search_params = {
    currPage: 0,
    pageSize : 10,
    assetId: null,
    assetName: null,
    userName: null,
    type: null,
  }
  ngOnInit() {
    this.search();
  }
  clear_search(): void {
    this.search_params = {
      currPage: 0,
      pageSize : 10,
      assetId: null,
      assetName: null,
      userName: null,
      type: null,
    }
  }
  search(): void {
    this.asset_service.getHistoryList(this.search_params).subscribe(res =>{
      if (res.code === 200){
        this.asset_info_history = res.result;
      }else {
        this.nz_message.error("获取数据错误!");
      }
    });
  }

}
