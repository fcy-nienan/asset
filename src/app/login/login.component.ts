import {Component, OnInit, ViewChild} from '@angular/core';
import {fromEvent, interval, Observable} from "rxjs";
import {User} from "../model/User";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest, HttpUrlEncodingCodec } from '@angular/common/http';
import {NzButtonComponent, NzMessageService} from 'ng-zorro-antd';
import {Router} from "@angular/router";
import {userService} from "../services/user.service";
import {map, switchMapTo, take, tap} from "rxjs/operators";
import {assetService} from "../services/asset.service";
import {logService} from "../services/log.service";
import {fileService} from "../services/file.service";
import {wareService} from "../services/ware.service";
import {configService} from "../services/config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private nz_message: NzMessageService,
    public user_service: userService,
    public asset_service: assetService,
    public log_service: logService,
    public file_service: fileService,
    public ware_service: wareService,
    public configService: configService,
    private router: Router,
  ) {}
  ngOnInit(): void {

  }
  model: string = 'login';
  user: User = new User();
  confirm_password: string = '';
  email_code: string = '';

  has_send_code = false;
  send_code_timeout = 60;

  result_string = "注册成功!";
  display_success_result = false;
  count_down(): void {
    interval(1000)
      .pipe(take( 1))   // 注意哦，这里是做 +1 的操作
      .subscribe({
        next: (value: number) => {
          this.has_send_code = true ;
          console.log(value);
          this.send_code_timeout = this.send_code_timeout - 1;
        },
        error: null,
        complete: () => {
          this.has_send_code = false;
          this.send_code_timeout = 60;
        }
      });
  }
  forget_password_send_code() {
    this.user_service.send_code({...this.user}).subscribe(res => {
      if(res.code === 200) {
        this.nz_message.success("验证码已发送!");
        this.count_down();
      }else {
        this.nz_message.warning("验证码发送失败!");
      }
    })
  }
  forget_password_page(): void {
    this.model = 'forget_password';
    this.has_send_code = false;
  }
  login(): void {
    console.log(this.user);
    this.user_service.login({
      email: this.user.email,
      password: this.user.password
    }).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.configService.token = res.result.token;
        this.configService.current_user  = res.result.user;
        console.log(this.configService);
        localStorage.setItem("token",res.result.token);
        localStorage.setItem("current_user",JSON.stringify(res.result.user));
        this.nz_message.success("登陆成功!");
        this.router.navigate(['dashboard'])
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
  register(): void {
    console.log(this.user);
    this.user_service.register({
      ...this.user
    }).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.nz_message.success("注册成功!");
        this.model = 'login';
        this.result_string = "注册成功!";
        this.model = '';
        this.display_success_result = true;
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
  to_page(model):void {
    this.model = model;
    this.display_success_result = false;
  }
  change_password(): void {
    console.log(this.user);
    this.user_service.change_password({
      email: this.user.email,
      code: this.email_code,
      password: this.user.password
    }).subscribe(res => {
      console.log(res);
      if (res.code === 200) {
        this.nz_message.success("密码修改成功!");
        this.result_string = "密码修改成功!";
        this.model = '';
        this.display_success_result = true;
      }else {
        this.nz_message.error(res.msg);
      }
    })
  }
}
