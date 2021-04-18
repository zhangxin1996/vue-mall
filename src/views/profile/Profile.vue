<template>
  <div id="profile">
    <profile-nav-bar/>
    <scroll ref="scroll" class="content">
      <profile-user-info/>
      <profile-account/>
      <profile-list-view :list-data="orderList"/>
      <profile-list-view :list-data="serviceList"/>
      <profile-list-view :list-data="otherList"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"

import ProfileNavBar from "./childCpns/ProfileNavBar"
import ProfileUserInfo from "./childCpns/ProfileUserInfo"
import ProfileAccount from "./childCpns/ProfileAccount"
import ProfileListView from "./childCpns/ProfileListView"

export default {
  name: "Profile",
  components: {
    Scroll,
    ProfileNavBar,
    ProfileUserInfo,
    ProfileAccount,
    ProfileListView
  },
  data() {
    return {
      orderList: [
        {icon: "message.png", text: "我的消息"},
        {icon: "jifen.png", text: "积分商城"},
        {icon: "vip.png",  text: "会员卡"}
      ],
      serviceList: [
        {icon: "gouwuche.png", text: "我的购物车"},
        {icon: "xiazai.png", text: "下载购物APP"}
      ],
      otherList: [
        {icon: "shezhi.png", text: "设置"},
        {icon: "gengduo.png", text: "更多"}
      ]
    }
  },
  activated() {
    this.$refs.scroll.refresh();
  },
}
</script>

<style scoped>
  .profile {
    height: 100vh;
  }

  .content {
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 9;
    overflow: hidden;
  }
</style>