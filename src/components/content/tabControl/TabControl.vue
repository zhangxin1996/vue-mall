<template>
  <div class="tab-control">
    <div :class="['tab-item', {activeClass: currentIndex === index}]" 
         v-for="(item, index) in titles" 
         :key="item"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
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
      this.$emit("tabClick", index);
    }
  }
}
</script>

<style scoped>
 .tab-control {
   display: flex;
   padding: 10px 0;
   text-align: center;
   font-size: 15px;
   background-color: var(--color-background);
 }
 .tab-control .tab-item {
   flex: 1;
 }
 .tab-control .tab-item span {
   padding: 3px;
 }

 .activeClass span {
   color: var(--color-high-text);
   border-bottom: 3px solid var(--color-high-text);
 }
</style>