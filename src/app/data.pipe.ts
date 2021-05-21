import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mzDict'
})
export class DataPipe implements PipeTransform {
  hash = {
    asset_info_status:{
      0:"空闲",
      1:"借用中",
      2:"使用中",
      3:"维修中",
      4:"报废"
    },
    usage_type:{
      1:"借用",
      2:"领用",
      3:"使用",
      4:"采购",
      5:"反馈",
      6:"归还",
    },
    deal_result:{
      0:"待处理",
      1:"同意",
      2:"拒绝",
      3:"归还"
    },
    can_borrow:{
      0:"借用",
      1:"领用",
      2:"使用"
    },
    job_level:{
      1:"普通学生用户",
      2:"教师用户",
      3:"管理员",
      9:"超级管理员",
    },
    user_status:{
      0:"未审核",
      1:"冻结",
      2:"正常"
    },
    urgency_status:{
      1:"不急",
      2:"一般",
      3:"急用"
    }
  }
  transform(value: unknown, ...args: unknown[]): string {
    const type = args[0].toString();
    return this.hash[type][value.toString()];
  }
}
