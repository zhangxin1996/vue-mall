<template>
  <div class="profile-account">
    <profile-account-item>
      <div slot="balance">0.00</div>
      <div slot="unit">元</div>
      <div slot="info">我的余额</div>
    </profile-account-item>
    <profile-account-item>
      <div slot="balance">0</div>
      <div slot="unit">个</div>
      <div slot="info">我的优惠</div>
    </profile-account-item>
    <profile-account-item>
      <div slot="balance">0</div>
      <div slot="unit">个</div>
      <div slot="info">我的积分</div>
    </profile-account-item>
  </div>
</template>

<script>
import ProfileAccountItem from "./ProfileAccountItem"

export default {
  name: "ProfileAccount",
  components: {
    ProfileAccountItem
  }
}
</script>

<style scoped>
  .profile-account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 88px;
    background-color: var(--color-background);
    border-bottom: 10px solid #f3f3f3;
  }
</style>