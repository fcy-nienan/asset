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
    params = {...params,token:this.configService.token}
    return this.httpClient.get<JsonResponse<T>>(this.configService.host + url, {
      params: new HttpParams({
        encoder: new MyHttpUrlEncodingCodec(),
        fromObject: params
      })
    });
  }
  public AUTH_HTTP_POST<T>(url: string, params: CreateParams = {}, headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})): Observable<JsonResponse<T>> {
    const options = {headers};
    params = {...params,token:this.configService.token}
    return this.httpClient.post<JsonResponse<T>>(this.configService.host +url, params, options);
  }
}
