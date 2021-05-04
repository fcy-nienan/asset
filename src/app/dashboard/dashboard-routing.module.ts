import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {InfoComponent} from "./info/info.component";
import {UserListComponent} from "./user-list/user-list.component";
import {WareListComponent} from "./ware-list/ware-list.component";
import {AssetListComponent} from "./asset-list/asset-list.component";
import {DashboardComponent} from "./dashboard.component";
import {LogListComponent} from "./log-list/log-list.component";
import {OperationListComponent} from "./log-list/operation-list/operation-list.component";
import {AssetHistoryComponent} from "./asset-list/asset-history/asset-history.component";

export const DashBoardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'info',
        data: {bread: '个人信息', module: true},
        children: [
          {
            path: "",
            data: {bread: '个人信息', permission: 'student/students'},
            component: InfoComponent
          }
        ]
      },
      {
        path: 'users',
        data: {bread: '用户列表', module: true},
        children:[
          {
            path: "",
            data: {bread: '用户列表', permission: 'student/students'},
            component: UserListComponent
          }
        ]
      },
      {
        path: 'logs',
        data: {bread: '日志列表', module: true},
        children:[
          {
            path: "",
            data: {bread: '信息列表', permission: 'student/students'},
            component: LogListComponent
          },
          {
            path: "operator",
            data: {bread: '操作日志', permission: 'student/students'},
            component: OperationListComponent
          }
        ]
      },
      {
        path: 'wares',
        data: {bread: '仓库管理', module: true},
        children:[
          {
            path: "",
            data: {bread: '仓库管理', permission: 'student/students'},
            component: WareListComponent
          }
        ]
      },
      {
        path: 'assets',
        data: {bread: '资产管理', module: true},
        children:[
          {
            path: "",
            data: {bread: '资产列表', permission: 'student/students'},
            component: AssetListComponent
          },
          {
            path: "history",
            data: {bread: '资产使用历史', permission: 'student/students'},
            component: AssetHistoryComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(DashBoardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
