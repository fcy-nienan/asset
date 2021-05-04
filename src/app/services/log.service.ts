import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {configService} from "./config.service";
import {httpHelper} from "./http.helper";
import {Injectable} from "@angular/core";
import {OperLog} from "../model/User";
@Injectable({
  providedIn: 'root'
})
export class logService{
  constructor(public http: httpHelper) {
  }
  public assetLogList(params){
    return this.http.AUTH_HTTP_GET<Array<OperLog>>('/asset_manage/logInfo/assetLogList', params)
  }
}
