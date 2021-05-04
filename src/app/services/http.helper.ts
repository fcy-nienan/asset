import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {configService} from "./config.service";
import {CreateParams, JsonResponse, MyHttpUrlEncodingCodec, SearchParams} from "../model/http_helper";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class httpHelper{
  constructor(public httpClient: HttpClient,
              public configService: configService) {
  }
  public AUTH_HTTP_GET<T>(url: string, params: SearchParams = {}, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    const token = localStorage.getItem("token");
    params = {...params,token:token}
    return this.httpClient.get<JsonResponse<T>>(this.configService.host + url, {
      params: new HttpParams({
        encoder: new MyHttpUrlEncodingCodec(),
        fromObject: params
      })
    });
  }
  public AUTH_HTTP_POST<T>(url: string, params: CreateParams = {}, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    const options = {};
    const token = localStorage.getItem("token");
    params = {...params,token:token}
    const token_Url = this.configService.host + url + "?token=" + token;
    return this.httpClient.post<JsonResponse<T>>(token_Url, params, options);
  }
}
