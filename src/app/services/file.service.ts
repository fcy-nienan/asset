import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {configService} from "./config.service";
import {httpHelper} from "./http.helper";
import {Injectable} from "@angular/core";

export interface AnyObject {
  // tslint:disable-next-line:no-any
  [x: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class fileService{
  constructor(public http: httpHelper) {
  }
  public fileUpload(params){
    return this.http.AUTH_HTTP_POST<Array<string>>('/asset_manage/file/fileUpload', params)
  }
  public deepCopy(oldObj: AnyObject): AnyObject {
    let newObj = oldObj;
    if (oldObj && typeof oldObj === 'object' && !(oldObj instanceof File) && !(oldObj instanceof Date)) {
      newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
      for (const i in oldObj) {
        newObj[i] = this.deepCopy(oldObj[i]);
      }
    }

    return newObj;
  }
  format_date (fmt,date) {
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
}
