<template>
  <div class="account-item">
    <div class="number">
      <div class="balance">
        <slot name="balance">0</slot>
      </div>
      <div class="unit">
        <slot name="unit"></slot>
      </div>
    </div>
    <div class="account-info">
      <div class="info">
        <slot name="info"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAccountItem"
}
</script>

<style scoped>
  .account-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #909090;
  }

  .number {
    display: flex;
    margin-bottom: 4px;
  }
  .number .balance {
    font-size: 24px;
    font-weight: bold;
    color: #f66447;
  }
  .number .unit {
    position: relative;
    bottom: -8px;
  }
</style>