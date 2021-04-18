<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div class="service">
        <i class="service-icon"></i>
        <span class=text>客服</span>
      </div>
      <div class="shop">
        <i class="shop-icon"></i>
        <span class=text>店铺</span>
      </div>
      <div class="select">
        <i class="select-icon"></i>
        <span class=text>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCartClick">购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCartClick() {
      this.$emit("addCartClick");
    }
  }
}
</script>

<style scoped>
  .detail-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    display: flex;
    width: 100%;
    height: 49px;
    background-color: #fff;
    font-size: 12px;
  }
  .bar-item {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .bar-item>div {
    flex: 1;
  }
  
  .bar-left div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bar-left i {
    width: 22px;
    height: 21px;
    display: inline-block;
    margin-bottom: 4px;
    background: url('~assets/img/detail/detail_bottom.png') no-repeat;
    background-size: 22px 150px;
  }
  .service i {
    background-position: 0 -53px;
  }
  .shop i {
    background-position: 0 -100px;
  }
  .select i {
    background-position: 0 1px;
  }

  .bar-right div {
    width: 100%;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
  } 
  .bar-right .cart {
    background-color: #f3ce1d;
    color: #666;
  }
  .bar-right .buy {
    background-color: #f57794;
    color: #fff;
  }
</style>