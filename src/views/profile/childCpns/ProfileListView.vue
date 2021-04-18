<template>
  <div class="profile-list-view">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <img :src="require('../../../assets/img/profile/' + (item.icon))" :alt="item.text">
      <div class="info">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileListView",
  props: {
    listData: {
      typs: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .profile-list-view {
    font-size: 15px;
    color: #333;
    background-color: var(--color-background);
    border-bottom: 10px solid #f3f3f3; 
  }

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 10px;
    height: 44px;
    
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .item:last-of-type {
    border-bottom: none;
  }

  .item img {
    width: 22px;
    margin-right: 10px;
  }
</style>