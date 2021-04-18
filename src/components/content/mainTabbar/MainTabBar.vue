<template>
  <div class="main-tabbar">
    <TabBar>
      <TabBarItem path="/home" :activeColor="activeColor">
          <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
          <img slot="item-active-icon" src="~assets/img/tabbar/home_active.png" alt="">
          <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" :activeColor="activeColor">
          <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
          <img slot="item-active-icon" src="~assets/img/tabbar/category_active.png" alt="">
          <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" :activeColor="activeColor">
          <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
          <img slot="item-active-icon" src="~assets/img/tabbar/cart_active.png" alt="">
          <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" :activeColor="activeColor">
          <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
          <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.png" alt="">
          <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import {TabBar, TabBarItem} from "components/common/tabbar"

export default {
  name: "MainTabBar",
  data() {
    return {
      activeColor: "#ff5777"
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>