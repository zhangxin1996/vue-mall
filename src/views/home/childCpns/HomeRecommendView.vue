<template>
  <div class="homeRecommend">
    <div class="recommendItem" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" :alt="item.image">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .homeRecommend {
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 16px;
    border-bottom: 10px solid #eee;
  }
  .recommendItem {
    flex: 1;
  }
  img {
    width: 70px;
    height: 70px;
    margin-bottom: 2px;
  }
</style>