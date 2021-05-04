import { isDate, isObject, isUndefined } from 'lodash';
import {HttpUrlEncodingCodec} from "@angular/common/http";
import {User} from "./User";

export class JsonResponse<T> {
  code: number;
  msg: string;
  result: T;
}
export interface loginResult{
  code: number;
  token: string;
  user: User;
}
export interface SearchParams {
  [param: string]: string | string[] ;
}

export interface CreateParams {
  // tslint:disable-next-line:no-any
  [param: string]: any;
}
// custom serialize encoder
export class MyHttpUrlEncodingCodec extends HttpUrlEncodingCodec {

  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  encodeValue(v: string): string {
    return encodeURIComponent(this.serializeValue(v));
  }

  // tslint:disable-next-line:no-any
  serializeValue(v: any): any {
    if (isObject(v)) {
      return isDate(v) ? v.toISOString() : JSON.stringify(v);
    }
    if (v === null || isUndefined(v)) {
      return '';
    }
    return v;
  }

}
