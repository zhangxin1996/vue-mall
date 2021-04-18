<template>
  <div class="profile-user-info">
    <div class="icon-info">
        <slot name="user-icon">
          <img src="~assets/img/profile/user.png" alt="">
        </slot>
    </div>
    <div class="login-info">
      <div class="login">
        <slot name="user-name">登录/注册</slot>
      </div>
      <div class="phone">
        <img src="~assets/img/profile/phone.png" alt="">
        <span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </span>
      </div>
    </div>
    <div class="right-arrow">
      <img src="~assets/img/profile/arrow_right.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserInfo"
}
</script>

<style scoped>
  .profile-user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px;
    height: 92px;
    color: #f1f1f1;
    background-color: var(--color-tint);
  }
  .icon-info {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
  }
  .login-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 16px;
    font-size: 14px;
  }
  .login-info .login {
    margin-bottom: 8px;
  }
  .login-info .phone img {
    vertical-align: middle;
  }
  .login-info .phone div {
    font-size: 12px;
  }
</style>