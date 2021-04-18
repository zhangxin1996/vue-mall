<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
import Pullup from '@better-scroll/pull-up'

BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)
BScroll.use(Pullup)

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    initBscroll() {
      // 1. 创建scroll对象
      // this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          click: true,
          observeDOM: true,   // // 开启 observe-dom 插件
          observeImage: true  // 开启 observe-image 插件
        });

        // 2. 监听滚动位置
          this.scroll.on("scroll", (position) => {
            this.$emit("contentScroll", position);
          })

        // 3. 监听上拉加载更多
        if(this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit("pullingUp");
          })
        }
      // })  
    },
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // 当滚动区域的dom结构有变化时，需要执行这个操作
      this.scroll && this.scroll.refresh();
      // console.log("+++");
    },
    getScrollY() {
      return this.scroll && this.scroll.y;
    }
  },
  watch: {
    data() {
      setTimeout(this.refresh, 20)
    }
  }
}
</script>

<style scoped>

</style>