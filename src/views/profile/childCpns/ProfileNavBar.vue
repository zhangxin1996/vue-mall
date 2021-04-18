<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <div slot="center">超级商城</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name: "ProfileNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .profile-nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>