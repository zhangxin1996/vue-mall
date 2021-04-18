<template>
  <div class="category-nav-bar">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name: "CategoryNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .category-nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>