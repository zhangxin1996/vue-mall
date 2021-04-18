<template>
  <div id="home">
    <home-navBar class="home-navbar"/>
    <tab-control class="placeholderTabControl"
                 :titles="titles" 
                 @tabClick="tabClick" 
                 ref="placeholderTabControl"
                 v-show="isShowTabControl"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @contentScroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <home-recommend-view :recommends="recommends" />
      <home-feature-view/>
      <tab-control :titles="titles" 
                   @tabClick="tabClick" 
                   ref="tabControl"/>
      <goods-list :goodsList="goodsList"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick"/>
  </div>
</template>

<script>
import {getHomeMultidata, getHomeGoods} from "network/home"
import {itemImgListenerMixin, backTopMixin} from "common/mixin"

import HomeNavBar from "./childCpns/HomeNavBar"
import HomeSwiper from "./childCpns/HomeSwiper"
import HomeRecommendView from "./childCpns/HomeRecommendView"
import HomeFeatureView from "./childCpns/HomeFeatureView"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemImgListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        "pop": {page: 0, list: []},
        "new": {page: 0, list: []},
        "sell": {page: 0, list: []}
      },
      currentType: "pop",
      tabControlOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0,
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1. 取消监听
    this.$bus.$off("goodsItemImgLoad", this.itemImgLoad);

    // 2. 保存Y值
    this.saveY = this.$refs.scroll.getScrollY();
  },
  methods: {
    /**
     * 事件监听相关代码：
     */
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 让两个tabControl的currentIndex保持一致
      this.$refs.placeholderTabControl.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    contentScroll(position) {
      // console.log(position);
      // 1. 是否显示backTop
      this.listenerShowBackTop(position);

      // 2. 是否显示PlaceholderTabControl组件
      this.isShowTabControl = (-position.y) > this.tabControlOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个$el属性，可以获取组件中的元素
      // 注意：当轮播图的图片加载完成后才可以正确的获取到tabControl的offsetTop
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /**
     * 网络请求相关代码：
     */
    getHomeMultidata() {
      return getHomeMultidata().then(res => {
        this.banners =  res && res.data.banner.list;
        this.recommends = res && res.data.recommend.list;
      }, err => {
        console.log(err);
      })
    },
    getHomeGoods(type) {
      let newPage = this.goods[type].page + 1;
      return getHomeGoods(type, newPage).then(res => {
        res && this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 结束上拉加载行为
        this.$refs.scroll.finishPullUp();
      }, err => {
        console.log(err);
      })
    }
  },
  computed: {
    goodsList() {
      return this.goods[this.currentType].list;
    }
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
  }
  .placeholderTabControl {
    position: relative;
    z-index: 9;
  }
  .content {
    width: 100%;
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 5;
    overflow: hidden;
  }
</style>