import { Component, OnInit } from '@angular/core';
// import {NzMessageService} from 'ng-zorro-antd/message';
import {userService} from "../../services/user.service";
import {assetService} from "../../services/asset.service";
import {logService} from "../../services/log.service";
import {AnyObject, fileService} from "../../services/file.service";
import {wareService} from "../../services/ware.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {WareHouse} from "../../model/User";

@Component({
  selector: 'app-ware-list',
  templateUrl: './ware-list.component.html',
  styleUrls: ['./ware-list.component.scss'],
  providers: [NzMessageService]
})
export class WareListComponent implements OnInit {

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
    warehouseName: null,
    address: null,
  }
  ngOnInit() {
    this.search();
  }
  ware_house_list = new Array<WareHouse>();
  clear_search(): void {
    this.search_params = {
      currPage: 0,
      pageSize : 10,
      assetId: null,
      warehouseName: null,
      address: null,
    }
  }
  search(): void {
    this.ware_service.warehouseList(this.search_params).subscribe(res =>{
      if (res.code === 200){
        this.ware_house_list = res.result;
      }else {
        this.nz_message.error("获取数据错误!");
      }
    });
  }

  title = "编辑仓库";
  show_edit = false;
  current_ware:   AnyObject = {};
  show_edit_house(data: WareHouse) {
    this.title = "编辑仓库";
    this.show_edit = true;
    this.current_ware = this.file_service.deepCopy(data);
  }

  confirm_edit() {
    this.ware_service.modifyWarehouse({...this.current_ware}).subscribe(res=>{
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

  delete_ware_house(data: WareHouse) {
    this.ware_service.removeWarehouse({id:data.id}).subscribe(res => {
      if (res.code === 200){
        this.nz_message.success("刪除成功!");
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
}
