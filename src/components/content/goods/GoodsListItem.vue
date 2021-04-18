<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="goodsItem.img || goodsItem.image || goodsItem.show.img" alt="" @load="goodsItemImgLoad">
    <div class="info">
      <p class="title">{{goodsItem.title}}</p>
      <div class="bottom">
        <span class="price">{{goodsItem.price | getShowPrice}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {priceFormat} from "common/utils"

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      dafault() {
        return {}
      }
    }
  },
  methods: {
    goodsItemImgLoad() {
      this.$bus.$emit("goodsItemImgLoad");
    },
    itemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid
        }
      });
    }
  },
  filters: {
    getShowPrice(value) {
      return priceFormat(value);
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
  }
  .goods-list-item .info {
    margin: 6px 0;
    font-size: 12px;
  }
  .info .title {
    overflow: hidden;
    text-overflow:ellipsis; 
    white-space: nowrap;
    margin-bottom: 6px;
  }
  .info .bottom {
    display: flex;
    justify-content: space-between;
  }
  .info .bottom .price {
    color: var(--color-high-text);
  }
  .info .bottom .cfav {
    position: relative;
  }
  .info .bottom .cfav::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -16px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>