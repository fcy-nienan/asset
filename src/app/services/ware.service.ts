import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {configService} from "./config.service";
import {httpHelper} from "./http.helper";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class wareService{
  constructor(public http: httpHelper) {
  }
  public addWarehouse(params){
    return this.http.AUTH_HTTP_POST('/asset_manage/warehouse/addWarehouse', params)
  }
  public warehouseList(params){
    return this.http.AUTH_HTTP_GET('/asset_manage/warehouse/warehouseList', params)
  }
  public removeWarehouse(params){
    return this.http.AUTH_HTTP_GET('/asset_manage/warehouse/removeWarehouse', params)
  }
  public modifyWarehouse(params){
    return this.http.AUTH_HTTP_POST('/asset_manage/warehouse/modifyWarehouse', params)
  }
  public warehouseBox(params){
    return this.http.AUTH_HTTP_GET('/asset_manage/warehouse/warehouseBox', params)
  }
}
