<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="detail-shop-info">
    <div class="shopTop">
      <img class="logo" :src="shopInfo.shopLogo" alt="">
      <span class="name">{{shopInfo.shopName}}</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="sell">
          <div class="number">{{shopInfo.sell | sellCountFilter}}</div>
          <div>总销量</div>
        </div>
        <div class="goods">
          <div class="number">{{shopInfo.goods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div v-for="(item,index) in shopInfo.score" :key="index" class="item">
          <span class="desc">{{item.name}}</span>
          <span class="price" 
                :style="item.isBetter ? {color: '#e0665d'} : {color: '#608c41'}">
            {{item.score}}
          </span>
          <span class="quality" 
                :style="item.isBetter ? {backgroundColor: '#e0665d'} : {backgroundColor: '#608c41'}">
            {{item.isBetter ? "高" : "低"}}
          </span>
        </div>
      </div>
    </div>
    <div class="goShop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if(value < 10000) return;
      return (value / 10000).toFixed(1) + "万";
    }
  }
}
</script>

<style scoped>
  .detail-shop-info {
    padding: 20px 10px;
    border-top: 3px solid #e6e6e6;
    border-bottom: 3px solid #e6e6e6;
  }

  .shopTop {
    display: flex;
    align-items: center;
  }
  .shopTop .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #dfe2e7;
    overflow: hidden;
  }
  .shopTop .name {
    margin-left: 10px;
    font-size: 14px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .content .left {
    width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    text-align: center;
    padding: 0 4px;
  }
  .content .left .sell .number, .goods .number {
    font-size: 14px;
    margin-bottom: 6px;
  }
  .content .left::after {
    content: '';
    border-right: 2px solid #dfe2e7;
    width: 1px;
    height: 40px;
  }
  .content .right {
    width: 48%;
    height: 75px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content .right .item {
    display: flex;
    justify-content: space-between;
  }
  .content .right .quality {
    padding: 1px;
    color: #fff;
  }

  .goShop {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10px;
    padding: 4px 5px;
    width: 80px;
    font-size: 14px;
    background-color: #e0e2e6;
    border-radius: 5px;
    cursor: pointer;
  }
</style>