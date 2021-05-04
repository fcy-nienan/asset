import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { InfoComponent } from './info/info.component';
import { UserListComponent } from './user-list/user-list.component';
import { LogListComponent } from './log-list/log-list.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { WareListComponent } from './ware-list/ware-list.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { EditAssetComponent } from './asset-list/edit-asset/edit-asset.component';
import { AssetHistoryComponent } from './asset-list/asset-history/asset-history.component';
import { OperationListComponent } from './log-list/operation-list/operation-list.component';
import {FormsModule} from "@angular/forms";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent,
    UserListComponent,
    LogListComponent,
    AssetListComponent,
    WareListComponent,
    EditUserComponent,
    EditAssetComponent,
    AssetHistoryComponent,
    OperationListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    FormsModule,
    NzDescriptionsModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule
  ]
})
export class DashboardModule { }
