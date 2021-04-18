<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
      </div>
      <div slot="center" class="titles">
        <div class="titlesItem" 
             v-for="(item, index) in titles" 
             :key="item" 
             @click="itemClick(index)"
             :class="{activeClass: currentIndex === index}">
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    }
  }
}
</script>

<style scoped>
  .back {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    background: url("~assets/img/common/back.svg") no-repeat center center / 22px 22px;
  }

  .titles {
    display: flex;
    font-size: 12px;
  }
  .titles .titlesItem {
    flex: 1;
  }

  .activeClass {
    color: var(--color-high-text);
  }
</style>