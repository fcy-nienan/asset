import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {configService} from "./config.service";
import {httpHelper} from "./http.helper";
import {Injectable} from "@angular/core";
import {AssetApplyList, AssetInfo, AssetList, AssetLogInfoDetail, AssetType, AssetUseHistory} from "../model/User";
@Injectable({
  providedIn: 'root'
})
export class assetService{
  constructor(public http: httpHelper) {
  }
  public addAssetType(params){
    return this.http.AUTH_HTTP_POST<string>('/asset_manage/assetType/addAssetType', params)
  }
  public assetTypeList(params){
    return this.http.AUTH_HTTP_GET<Array<AssetType>>('/asset_manage/assetType/assetTypeList', params)
  }
  public removeAssetType(params){
    return this.http.AUTH_HTTP_POST<string>('/asset_manage/assetType/removeAssetType', params)
  }

  public addAsset(params){
    return this.http.AUTH_HTTP_POST<string>('/asset_manage/asset/addAsset', params)
  }
  public assetList(params){
    return this.http.AUTH_HTTP_GET<Array<AssetList>>('/asset_manage/asset/assetList', params)
  }
  public assetDetail(params){
    return this.http.AUTH_HTTP_GET<AssetInfo>('/asset_manage/asset/assetDetail', params)
  }
  public modifyAsset(params){
    return this.http.AUTH_HTTP_POST<string>('/asset_manage/asset/modifyAsset', params)
  }
  public getHistoryList(params){
    return this.http.AUTH_HTTP_GET<Array<AssetUseHistory>>('/asset_manage/asset/getHistoryList', params)
  }


  public postApply(params){
    return this.http.AUTH_HTTP_POST('/asset_manage/apply/postApply', params)
  }
  public assetLogList(params){
    return this.http.AUTH_HTTP_GET<Array<AssetApplyList>>('/asset_manage/apply/assetLogList', params)
  }public agreeApply(params){
    return this.http.AUTH_HTTP_GET('/asset_manage/apply/agreeApply', params)
  }
  public disagreeApply(params){
    return this.http.AUTH_HTTP_GET('/asset_manage/apply/disagreeApply', params)
  }
  public returnAsset(params){
    return this.http.AUTH_HTTP_GET('/asset_manage/apply/returnAsset', params)
  }
  public assetApplyDetail(params){
    return this.http.AUTH_HTTP_GET<AssetLogInfoDetail>('/asset_manage/apply/assetApplyDetail', params)
  }



}
