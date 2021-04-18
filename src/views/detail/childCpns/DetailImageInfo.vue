<template>
  <div class="detail-info">
    <div class="desc">
      <div class="start"></div>
      <p>{{detailImageInfo.desc}}</p>
      <div class="end"></div>
    </div>
    <div class="content">
      <div v-for="(itemx, index) in detailImageInfo.detailImage" :key="index">
        <p class="text">{{itemx.key}}</p>
        <div class="imgList" v-for="(itemy, indey) in itemx.list" :key="indey">
          <img class="img" v-lazy="itemy" alt="" @load="imageLoad">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImageInfo",
  props: {
    detailImageInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit("detailImgLoad");
    }
  },
}
</script>

<style scoped>
  .detail-info {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 3px solid #e6e6e6;
    font-size: 12px;
  }

  .desc .start, .desc .end {
    position: relative;
    width: 60px;
    height: 2px;
    background-color: #a3a3a5;
  }
  .desc .start {
    float: left;
  }
  .desc .end {
    float: right;
  }
  .desc .start::before, .desc .end::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #a3a3a5;
  }
  .desc .start::before {
    top: -5px;
    left: 0;
  }
  .desc .end::before {
    bottom: -5px;
    right: 0;
  }
  .desc p {
    padding: 10px 0;
  }

  .content {
    padding: 10px 0;
  }
  .content .text {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .content .img {
    width: 100%;
  }
</style>