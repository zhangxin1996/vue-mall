<template>
  <div class="cart-list-item">
    <div class="checkbox">
      <cart-check-button :is-checked="cartListItem.isChecked" @click.native="checkedChange"/>
    </div>
    <div class="item-img">
      <img :src="cartListItem.img" alt="">
    </div>
    <div class="item-info">
      <div class="title">{{cartListItem.title}}</div>
      <div class="bottom">
        <span class="price">{{cartListItem.price | priceFormat}}</span>
        <span class="count">x {{cartListItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {priceFormat} from "common/utils"

import CartCheckButton from "./CartCheckButton"

export default {
  name: "CartListItem",
  components: {
    CartCheckButton
  },
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkedChange() {
      this.cartListItem.isChecked = !this.cartListItem.isChecked;
    }
  },
  filters: {
    priceFormat(value) {
      return priceFormat(value);
    }
  }
}
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .cart-list-item .checkbox {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .cart-list-item .item-img img {
    width: 66px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 10px;
  }
  .cart-list-item .item-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px 0;
    font-size: 14px;
  }

  .item-info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .item-info .bottom {
    display:flex;
    justify-content: space-between;
    
  }
  .bottom .price {
    font-weight: bold;
    color: var(--color-high-text);
  }
</style>