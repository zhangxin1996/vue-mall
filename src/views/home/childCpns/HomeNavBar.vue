<template>
  <div class="home-navbar">
    <NavBar>
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name: "HomeNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .home-navbar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>