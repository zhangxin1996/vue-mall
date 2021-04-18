<template>
  <div class="cart-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import NavBar from "components/common/navbar/NavBar"

export default {
  name: "CartNavBar",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters([
      "cartLength"
    ])
  }
}
</script>

<style scoped>
  .cart-nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>