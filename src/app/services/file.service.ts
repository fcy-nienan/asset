import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {configService} from "./config.service";
import {httpHelper} from "./http.helper";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class fileService{
  constructor(public http: httpHelper) {
  }
  public fileUpload(params){
    return this.http.AUTH_HTTP_POST('/asset_manage/file/fileUpload', params)
  }
}
