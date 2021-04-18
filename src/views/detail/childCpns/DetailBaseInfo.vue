<template>
  <div v-if="Object.keys(goodsBaseInfo).length !== 0" class="detail-base-info">
    <div class="title">{{goodsBaseInfo.title}}</div>
    <div class="price">
      <span class="newPrice">{{goodsBaseInfo.newPrice | getNewPrice}}</span>
      <span class="oldPrice">{{goodsBaseInfo.oldPrice | getOldPrice}}</span>
      <span class="desc" 
            v-if="goodsBaseInfo.discountDesc"
            :style="{backgroundColor: goodsBaseInfo.discountBgColor}">
            {{goodsBaseInfo.discountDesc}}
      </span>
    </div>
    <div class="other">
      <span>{{goodsBaseInfo.columns[0]}}</span>
      <span>{{goodsBaseInfo.columns[1]}}</span>
      <span>{{goodsBaseInfo.services[goodsBaseInfo.services.length-1].name}}</span>
    </div>
    <div class="services">
      <div v-for="index in goodsBaseInfo.services.length-1" :key="index">
        <img v-if="goodsBaseInfo.services[index-1].icon" :src="goodsBaseInfo.services[index-1].icon" alt="">
        <span>{{goodsBaseInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {priceFormat} from "common/utils"

export default {
  name: "DetailBaseInfo",
  props: {
    goodsBaseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    getNewPrice(value) {
      return priceFormat(value);
    },
    getOldPrice(value) {
      return priceFormat(value);
    }
  }
}
</script>

<style scoped>
  .detail-base-info {
    padding: 10px 6px;
  }

  .title {
    font-size: 15px;
  }

  .price {
    margin-top: 10px;
  }
  .price .newPrice {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-high-text);
    margin-right: 4px;
  }
  .price .oldPrice {
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
  }
  .price .desc {
    position: relative;
    top: -3px;
    left: 6px;
    padding: 2px 6px 2px 3px;;
    color: #fff;
    font-size: 12px;
    border-radius: 6px;
  }
  .other, .services {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 10px 0;
    color: #c1c1c3;
    font-size: 12px;
  }
  .services {
    color: #979797;
  }
  .services img {
    width: 12px;
    height: 12px;
    vertical-align: bottom;
    margin-right: 2px;
  }
</style>