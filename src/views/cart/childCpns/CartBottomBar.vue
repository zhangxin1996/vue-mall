<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="allChecked">
        <cart-check-button class="check-button" :is-checked="isSelectAll" @click.native="allCheckboxClick"/>
        <span>全选</span>
      </div>
      <div>
        <span>合计：{{totalPrice | priceFormat}}</span>
      </div>
    </div>
    <div class="right" @click="calcClick">
      <span>去计算：{{totalQuantity}}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import {priceFormat} from "common/utils"

import CartCheckButton from "./CartCheckButton"

export default {
  name: "CartBottomBar",
  components: {
    CartCheckButton
  },
  filters: {
    priceFormat(value) {
      return priceFormat(value);
    }
  },
  methods: {
    allCheckboxClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.isChecked = false);
      } else {
        this.cartList.forEach(item => item.isChecked = true);
      }
    },
    calcClick() {
      if(this.cartLength === 0) {
        this.$myToast.show("您的购物车还没有商品，请选购", 2000);
      }else if(!this.calcChecked) {
        this.$myToast.show("请选择您要购买的商品", 2000);
      }
    }
  },
  computed: {
    ...mapGetters([
      "cartList",
      "cartLength"
    ]),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.isChecked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2);
    },
    totalQuantity() {
      return this.cartList.filter(item => {
        return item.isChecked
      }).reduce((prevalue, item) => {
        return prevalue + item.count
      }, 0)
    },
    isSelectAll() {
      if(this.cartList.length === 0) return false;
      return this.cartList.every(item => item.isChecked);
    },
    calcChecked() {
      return this.cartList.some(item => item.isChecked);
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    height: 30px;
    background: #e4e4e4;
    font-size: 14px;
  }
  .bottom-bar .left {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .left .allChecked {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .left .allChecked .check-button {
    margin-right: 6px;
  }
  .bottom-bar .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>