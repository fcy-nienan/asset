import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LOGIN_ROUTES} from './login-routing.module';
import { LoginComponent } from './login.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzResultModule} from "ng-zorro-antd/result";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LOGIN_ROUTES,
    CommonModule,
    NzButtonModule,
    NzResultModule,
    NzFormModule,
    FormsModule,
  ]
})
export class LoginModule { }
