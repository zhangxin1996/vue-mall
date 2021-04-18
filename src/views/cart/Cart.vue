<template>
  <div id="cart">
    <cart-nav-bar/>
    <scroll ref="scroll" class="content" :probe-type="3">
      <cart-list :cart-list="cartList"/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import Scroll from "components/common/scroll/Scroll"

import CartNavBar from "./childCpns/CartNavBar"
import CartList from "./childCpns/CartList"
import CartBottomBar from "./childCpns/CartBottomBar"

export default {
  name: "Cart",
  components: {
    Scroll,
    CartNavBar,
    CartList,
    CartBottomBar
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters([
      "cartList"
    ])
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .content {
    position: fixed;
    top: 44px;
    bottom: 79px;
    left: 0;
    right: 0;
    z-index: 9px;

    overflow: hidden;
  }
</style>