<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="swiperImgLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImgLoad() {
      if(!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  }
}
</script>

<style scoped>

</style>