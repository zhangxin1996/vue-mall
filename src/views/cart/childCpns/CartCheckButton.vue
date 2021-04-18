<template>
  <div class="check-button" :class="{'checked': isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CartCheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .check-button {
    display: flex;
    align-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .checked {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
  }
</style>