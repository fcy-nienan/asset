import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {userService} from "../../../services/user.service";
import {assetService} from "../../../services/asset.service";
import {logService} from "../../../services/log.service";
import {fileService} from "../../../services/file.service";
import {wareService} from "../../../services/ware.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss']
})
export class EditAssetComponent implements OnInit {

  constructor(private nz_message: NzMessageService,
              public user_service: userService,
              public asset_service: assetService,
              public log_service: logService,
              public file_service: fileService,
              public ware_service: wareService,
              private router: Router) { }

  ngOnInit() {
  }

}
