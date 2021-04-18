<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-midden">
      <div class="user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="content">{{commentInfo.content}}</div>
      <div class="other-info">
        <span class="date">{{commentInfo.created | getShowDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="goods-imgs">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {dateFormat} from "common/utils"

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    getShowDate(value) {
      // 1. 将时间戳转化为Date对象
      const date = new Date(value * 1000);

      // 2. 将data格式化
      return dateFormat(date, "yyyy-MM-dd HH:mm:ss");
    }
  }
}
</script>

<style scoped>
  .detail-comment-info {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 3px solid #e6e6e6;
    font-size: 12px;
  }

  .comment-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .comment-midden {
    padding: 8px 6px;
  }
  .comment-midden .user {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
  .comment-midden .user img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .comment-midden .content {
    color: #767676;
    align-items: center;
    margin: 6px 0;
    line-height: 18px;
  }
  .comment-midden .other-info {
    color: #b7b2b2;
  }
  .comment-midden .other-info .date {
    margin-right: 8px;
  }
  .comment-midden .goods-imgs {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .comment-midden .goods-imgs img {
    width: 70px;
    height: 70px;
    padding-right: 6px;
  }
</style>