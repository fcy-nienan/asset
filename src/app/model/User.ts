export class User{
  constructor() {
    this.userName = '';
    this.email = '';
    this.telephone = '';
    this.signature = '';
  }
  id: bigint;

  userName: string;

  password: string;

  signature: string;

  telephone: string;

  email: string;

   jobLevel: bigint;

   status: bigint;

   isDelete: bigint;
}
export class AssetApply{
  constructor() {
  }
  type: number;
  number: number;
  userId: number;
  assetId: number;
  address: string;
  purpose: string;
}
export class AssetApplyList{
  id: number;
  type: number;
  number: number;
  userName: string;
  assetId: number;
  assetName: number;
  startTime: string;
  urgency: number;
  result: number;
}
export class AssetLendRank{
  assetName: string;
  assetNum: string;
}
export class AssetList{
  id: number;
  assetName: string;
  version: string;
  status: number;
  purchaseData: string;
  userType: number;
  wareHouseName: string;
  assetNum: number;
}
export class AssetApplyBO{
  constructor(asset_list: AssetList) {
    this.assetName = asset_list.assetName;
    this.mapId = asset_list.id;
    this.assetVersion = asset_list.version;
    this.assetId = asset_list.id;

  }
  mapId: number;
  type: number;
  number: number;
  userName: string;
  assetId: number;
  assetName: string;
  assetVersion: string;
  address: string;
  purpose: string;

  startTime: string;
  endTime: string;
  urgency: number;
  remarks: string;
  result: number;
  image1: string;
  image2: string;
  image3: string;

}
export class AssetLogInfoDetail{
  type: number;
  number: number;
  userName: string;
  assetId: number;
  assetName: string;
  assetVersion: string;
  address: string;
  purpose: string;

  startTime: string;
  endTime: string;
  urgency: number;
  remarks: string;
  result: number;
  image1: string;
  image2: string;
  image3: string;

}
export class AssetUserHalfYear{
  data: string;
  monthAssetNum: number;
}
export class AssetUseHistory{
  id: number;
  assetName: string;
  applyType: number;
  userName: string;
  startTime: string;
  status: number;
  result: number;
}
export class IndexData{
  constructor() {
    this.assetLendRankList = [];
    this.assetUseHalfYearBOList = [];
  }
  assetSum: number;
  assetInUse: number;
  lendAssetNum: number;
  assetDamageNum: number;
  assetUseLend: number;
  assetUseReceive: number;
  assetUseConstant: number;
  assetUserRepair: number;
  assetLendRankList: Array<AssetLendRank>;
  assetUseHalfYearBOList: Array<{}>;
}
export class MapList{
  id: number;
  mapName: string;
}
export class OperLog{
  id: number;
  userId: number;
  userName: string;
  remarks: string;
  startTime: string;
}
export  class PasswordBO{
  email: string;
  code: number;
  password: string;
}
export  class RegisterUserBO{
  checkCode: number;
  passwordAgain: string;
}
export  class UserDetail{
  constructor() {
    this.assetUseHistoryBOList = [];
  }
  id: number;
  userName: string;
  signature: string;
  telephone: string;
  email: string;
  assetUseHistoryBOList: Array<AssetUseHistory>;
}
export  class UserList{
  id: number;
  jobLevel: number;
  userName: string;
  telephone: string;
  email: string;
  status: number;
}
export class UserLogin{
  code: number;
  token: number;
  user: User;
}
export  class WareHouse{
  id: number;
  name: string;
  address: string;
  manageName: string;
  createTime: string;
  assetNum: number;
}
export class WareHouseBox{
  id: number;
  name: string;
}
export class AssetType{
  id: number;
  typeName: string;
  createTime: string;
  isDelete: number;
}

export class AssetInfo{
  id: number;
  assetName: string;
  typeId: number;
  version: string;
  manufacture: string;
  price: number;
  status: number;
  purchaseDate: string;
  life: number;
  useType: number;
  manageId: number;
  warehouseId: number;
  mapId: number;
  assetNum: number;
  remarks: string;
  image1: string;
  isDelete: number;
  image2: string;
  image3: string;

}
