import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateParams, JsonResponse, loginResult, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {configService} from "./config.service";
import {httpHelper} from "./http.helper";
import {Injectable} from "@angular/core";
import {IndexData, User, UserDetail, UserList} from "../model/User";
@Injectable({
  providedIn: 'root'
})
export class userService{
  constructor(public http: httpHelper) {
  }
  public login(params){
    return this.http.AUTH_HTTP_GET<loginResult>('/login', params)
  }
  public register(params){
    return this.http.AUTH_HTTP_POST<string>('/register',params)
  }
  public change_password(params){
    return this.http.AUTH_HTTP_POST<string>('/password',params)
  }
  public send_code(params){
    return this.http.AUTH_HTTP_GET<string>('/email/send',params);
  }
  public userList(params){
    return this.http.AUTH_HTTP_GET<Array<UserList>>('/asset_manage/user/userList',params)
  }

  public addUser(params){
    return this.http.AUTH_HTTP_POST<string>('/asset_manage/user/addUser',params)
  }
  public removeUser(params){
    return this.http.AUTH_HTTP_GET<string>('/asset_manage/user/removeUser',params)
  }
  public modifyUser(params){
    return this.http.AUTH_HTTP_POST<User>('/asset_manage/user/modifyUser',params)
  }
  public userDetail(params){
    return this.http.AUTH_HTTP_GET<User>('/asset_manage/user/userDetail',params)
  }
  public personalZone(params){
    return this.http.AUTH_HTTP_GET<UserDetail>('/asset_manage/user/personalZone',params)
  }

  public agreeUser(params){
    return this.http.AUTH_HTTP_GET<string>('/asset_manage/user/agreeUser',params)
  }
  public disagreeUser(params){
    return this.http.AUTH_HTTP_GET<string>('/asset_manage/user/disagreeUser',params)
  }

  public index(params){
    return this.http.AUTH_HTTP_GET<IndexData>('/asset_manage/dataVisible/index',params)
  }
}
