import {request1} from "./request"

export function getDetail(iid) {
  return request1({
    url: "/detail",
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request1({
    url: "/recommend"
  })
}

// 对数据进行提取整合
export class GoodsBaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.lowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopName = shopInfo.name;
    this.sell = shopInfo.cSells;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class ParamsInfo {
  constructor(info, rule) {
    this.productInfo = info;
    this.sizeInfo = rule;
  }
}