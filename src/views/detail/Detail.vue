<template>
  <div id="detail">
    <detail-nav-bar ref="titles" @titleClick="titleClick"/>
    <scroll ref="scroll" class="content" :probe-type="3" @contentScroll="contentScroll">
      <detail-swiper ref="goods" :top-images="topImages"/>
      <detail-base-info :goods-base-info="goodsBaseInfo"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-image-info :detail-image-info="detailImageInfo" @detailImgLoad="detailImgLoad"/>
      <detail-params-info ref="params" :params-info="paramsInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods-list="goodsList"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick"/>
    <detail-bottom-bar @addCartClick="addCartClick"/>
  </div>
</template>

<script>
import {getDetail, 
        GoodsBaseInfo, 
        ShopInfo,
        ParamsInfo,
        getRecommend
} from "network/detail"
import {debounce} from "common/utils"
import {itemImgListenerMixin, backTopMixin} from "common/mixin"

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import DetailNavBar from './childCpns/DetailNavBar'
import DetailSwiper from './childCpns/DetailSwiper'
import DetailBaseInfo from './childCpns/DetailBaseInfo'
import DetailShopInfo from './childCpns/DetailShopInfo'
import DetailImageInfo from './childCpns/DetailImageInfo'
import DetailParamsInfo from './childCpns/DetailParamsInfo'
import DetailCommentInfo from "./childCpns/DetailCommentInfo"
import DetailBottomBar from "./childCpns/DetailBottomBar"

export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar
  },
  mixins: [itemImgListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goodsBaseInfo: {},
      shopInfo: {},
      detailImageInfo: {},
      paramsInfo: {},
      commentInfo: {},
      goodsList: [],
      titleCurrentIndex: 0,
      thremeTopYs: [],
      getThemeTopY: null,
      isShowBackTop: false
    }
  },
  created() {
    // 1. 保存传入的 iid 数据
    this.iid = this.$route.query.iid;

    // 2. 根据 iid 发送网络请求
    this.getDetail(this.iid);

    // 3. 发送推荐网络请求
    this.getRecommend();
  },
  mounted() {
    this.getThemeTopY = debounce(() => {
      this.thremeTopYs = [];
      this.thremeTopYs.push(this.$refs.goods.$el.offsetTop);
      this.thremeTopYs.push(this.$refs.params.$el.offsetTop);
      this.thremeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.thremeTopYs.push(this.$refs.recommend.$el.offsetTop);

      // console.log(this.thremeTopYs);
    }, 50)
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgLoad);
  },
  methods: {
    /**
     * 书写业务逻辑的方法
     */
    detailImgLoad() {
      // 1. 执行refresh()
      this.newRefresh();

      // 2. 获取主题的offsetTop
      this.getThemeTopY();
    },
    titleClick(index) {
      this.titleCurrentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.thremeTopYs[index], 50);
    },
    contentScroll(position) {
      const positionY = -(position.y);

      // 1. backTop是否显示
      this.listenerShowBackTop(position);

      // 2. 滚动时positionY与thremeTopYs中的值进行对比
      /**
       * this.thremeTopYs: [0, 15928, 16540, 16814]
       * 情况一：positionY在0~15928之间，index=0
       * 情况二：positionY在15928~16540之间，index=1
       * 情况三：positionY在16540~16814之间，index=2
       * 
       * 情况四：positionY在大于等于16814，index=3
       */
      for(let i = 0; i < this.thremeTopYs.length; i++) {
        /**
         * a为判断前三种情况
         * b为判断第四种情况
         * c为判断如果当前的title索引不等于i，才进入接下来的操作，防止赋值过程过于频繁
         */
        let a = (i < this.thremeTopYs.length - 1 && positionY >= this.thremeTopYs[i] && positionY < this.thremeTopYs[i+1]);
        let b = (i == this.thremeTopYs.length - 1 && positionY >= this.thremeTopYs[i]);
        let c = this.titleCurrentIndex !== i;
        if(c && (a || b)) {
          // console.log(i);
          this.titleCurrentIndex = i;
          this.$refs.titles.currentIndex = i;
        }
      }
    },
    addCartClick() {
      const product = {};

      product.id = this.iid;
      product.title = this.goodsBaseInfo.title;
      product.price = this.goodsBaseInfo.newPrice;
      product.img = this.detailImageInfo.detailImage[0].list[0];

      this.$store.dispatch("addCart", product).then(res => {
        this.$myToast.show(res, 2000);
      })
    },
    /**
     * 发送网络请求的方法
     */
    getDetail(iid) {
      getDetail(iid).then(res => {
        console.log(res);
        const data = res && res.result;

        // 1. 获取顶部轮播图图片数据
        this.topImages = data.itemInfo.topImages;

        // 2, 获取商品基本数据
        this.goodsBaseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services);

        // 3. 获取店铺数据
        this.shopInfo = new ShopInfo(data.shopInfo);

        // 4. 获取商品详情图片
        this.detailImageInfo = data.detailInfo;

        // 5. 获取参数信息
        this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule);

        // 6. 获取评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      }, err => {
        console.log(err);
      })
    },
    getRecommend() {
      getRecommend().then(res => {
        // console.log(res);
        this.goodsList = res.data.list;
      }, err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #fff;
  }

  #detail .content {
    width: 100%;
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 15;
    overflow: hidden;
  }
</style>