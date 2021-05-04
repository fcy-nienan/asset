import {Injectable} from "@angular/core";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class configService{
  ip: string = 'http://127.0.0.1'
  port: number = 8092;
  host: string = this.ip + ":" + this.port;
}
