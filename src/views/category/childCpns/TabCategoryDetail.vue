<template>
  <div class="tab-category-detail">
    <goods-list :goods-list="categoryDetail"/>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList"

export default {
  name: "TabCategoryDetail",
  components: {
    GoodsList
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>