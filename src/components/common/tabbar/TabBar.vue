<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    width: 100%;
    height: 49px;
    text-align: center;
    font-size: 12px;
    background-color: var(--color-background);
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  }
</style>