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
import { AssetHistoryComponent } from './asset-list/asset-history/asset-history.component';
import { OperationListComponent } from './log-list/operation-list/operation-list.component';
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule} from "@angular/forms";
import { DataPipe } from '../data.pipe';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";

@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent,
    UserListComponent,
    LogListComponent,
    AssetListComponent,
    WareListComponent,
    AssetHistoryComponent,
    OperationListComponent,
    DataPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDescriptionsModule,
    NzModalModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzFormModule,
    FormsModule,
    NzSelectModule,
    NzRadioModule,
    NzDatePickerModule,
    NzInputNumberModule,
  ]
})
export class DashboardModule { }
