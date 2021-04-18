<template>
  <div class="wrap" v-if="isShow">
    <p class="toast">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
      timer: null
    }
  },
  methods: {
    show(msg, delay=2000) {
      this.message = msg;
      this.isShow = true;

      this.timer = setTimeout(() => {
        this.isShow = false;
        this.message = "";
        clearTimeout(this.timer);
      }, delay);
    }
  }
}
</script>

<style scoped>
  .wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    border-radius: 2px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .toast {
    text-align: center;
  }
</style>