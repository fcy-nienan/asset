import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LOGIN_ROUTES} from './login-routing.module';
import { LoginComponent } from './login.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from "ng-zorro-antd";
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LOGIN_ROUTES,
    CommonModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class LoginModule { }
