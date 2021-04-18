<template>
  <div class="tab-category">
    <div v-for="(item, index) in subCategory.list" :key="index" class="sub-category-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabSubCategory",
  props: {
    subCategory: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .tab-category {
    display: flex;
    flex-wrap: wrap;
  }
  .sub-category-item {
    width: 33.333333%;
    padding: 10px;
  }
  .sub-category-item img {
    width: 100%;
  }
  .sub-category-item p {
    margin-top: 4px;
    font-size: 12px;
    text-align: center;
  }
</style>