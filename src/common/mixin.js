import {debounce} from "common/utils"

import BackTop from 'components/content/backTop/BackTop'

export const itemImgListenerMixin = {
  data() {
    return {
      itemImgLoad: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh(), 100);
    // 对监听的函数进行保存
    this.itemImgLoad = () => {
      this.newRefresh();
    }
    this.$bus.$on("goodsItemImgLoad", this.itemImgLoad);
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return { 
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenerShowBackTop(position) {
      this.isShowBackTop = -(position.y) > 1000;
    }
  }
}