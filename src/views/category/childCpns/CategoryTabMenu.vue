<template>
  <scroll id="tab-menu">
    <div v-for="(item, index) in categories" 
         :key="index" class="menu-item" 
         @click="itemClick(index)"
         :class="{'active': currentIndex === index}">
      <span>{{item.title}}</span>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"

export default {
  name: "CategoryTabMenu",
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("menuIndex", index);
    }
  }
}
</script>

<style scoped>
  #tab-menu {
    height: 100%;
    width: 100px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #f6f6f6;
  }
  .menu-item {
    height: 46px; 
    line-height: 46px;
    text-align: center;
    font-size: 14px;
    border-bottom: 1px solid #eee;
  }

  .active {
    color: var(--color-high-text);
    font-weight: bold;
    background-color: var(--color-background);
    border-left: 4px solid var(--color-high-text);
  }
</style>