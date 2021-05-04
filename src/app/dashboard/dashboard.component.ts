import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {DashBoardRoutes, DashboardRoutingModule} from "./dashboard-routing.module";
import {userService} from "../services/user.service";
import {assetService} from "../services/asset.service";
import {logService} from "../services/log.service";
import {fileService} from "../services/file.service";
import {wareService} from "../services/ware.service";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {configService} from "../services/config.service";
interface DashboardMenu {
  name: string;
  url?: string;
  icon?: string;
  module?: string;
  permission?: boolean;
  children?: DashboardMenu[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private nz_message: NzMessageService,
              public user_service: userService,
              public asset_service: assetService,
              public log_service: logService,
              public file_service: fileService,
              public ware_service: wareService,
              public configService: configService,
              private router: Router) { }
  isCollapsed = false;
  show_menu = true;
  current_user = new User();
  breadTitle = '';
  breads = [];

  ngOnInit(): void {
    console.log(this.configService)
    this.current_user = JSON.parse(localStorage.getItem("current_user"));
  }

  signOut() {
    localStorage.setItem("token","");
    localStorage.setItem("current_user","");
    this.router.navigate(['login'])
  }

  menus: DashboardMenu[] = [
    {
      name: '个人中心',
      icon: 'iconuser',
      module: 'info',
      children: [
        {name: '用户信息', url: ''},
      ]
    },
    {
      name: '资产管理',
      module: 'assets',
      icon: 'iconbank-fill',
      children: [
        {name: '资产列表', url: ''},
        {name: '资产使用历史', url: 'history'}
      ]
    },

    {
      name: '用户管理',
      module: 'users',
      icon: 'iconxueyuan', children: [
        {name: '用户列表', url: ''},
      ]
    },
    {
      name: '仓库管理',
      module: 'wares',
      icon: 'iconxueyuan', children: [
        {name: '仓库管理', url: ''}
      ]
    },
    {
      name: '综合日志管理',
      module: 'logs',
      icon: 'iconxueyuan', children: [
        {name: '信息列表', url: ''},
        {name: '操作日志', url: 'operator'}
      ]
    }
  ];

}
