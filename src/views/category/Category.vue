<template>
  <div id="categroy">
    <category-nav-bar/>
    <div class="content">
      <category-tab-menu :categories="categories" @menuIndex="menuIndex"/>
      <scroll ref="scroll" 
              class="subContent" 
              :probe-type="3"
              @contentScroll="contentScroll" 
              :data="[categoryData]">
        <tab-sub-category :sub-category="showSubCategory"/>
        <tab-control :titles="titles" @tabClick="tabClick"/>
        <tab-category-detail :category-detail="categoryDetail"/>
      </scroll>
      <back-top v-show="isShowBackTop" @click.native="backTopClick"/>
    </div>
  </div>
</template>

<script>
import {getCategory, getSubCategory, getSubCategoryDetail} from "network/category"
import {backTopMixin} from "common/mixin"

import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/tabControl/TabControl"

import CategoryNavBar from "./childCpns/CategoryNavBar"
import CategoryTabMenu from "./childCpns/CategoryTabMenu"
import TabSubCategory from "./childCpns/TabSubCategory"
import TabCategoryDetail from "./childCpns/TabCategoryDetail"

export default {
  name: "Category",
  components: {
    Scroll,
    TabControl,
    CategoryNavBar,
    CategoryTabMenu,
    TabSubCategory,
    TabCategoryDetail
  },
  mixins: [backTopMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentMenuIndex: -1,
      titles: ["流行", "新款", "精选"],
      tabDetailType: "pop"
    }
  },
  created() {
    // 1. 左边菜单的数据
    this._getCategory();
  },
  computed: {
    showSubCategory() {
      if(this.currentMenuIndex === -1) return {};
      return this.categoryData[this.currentMenuIndex].subcategories;
    },
    categoryDetail() {
      if(this.currentMenuIndex === -1) return [];
      return this.categoryData[this.currentMenuIndex].subCategoryDetails[this.tabDetailType];
    }
  },
  methods: {
    /**
     * 业务逻辑相关代码
     */
    menuIndex(index) {
      this._getSubCategory(index);
    },
    tabClick(index) {
      switch(index) {
        case 0:
          this.tabDetailType = "pop";
          break;
        case 1:
          this.tabDetailType = "new";
          break;
        case 2:
          this.tabDetailType = "sell";
          break;
      }
    },
    contentScroll(position) {
      // 1. 是否显示backTop
      this.listenerShowBackTop(position);
    },

    /**
     * 网络请求相关代码
     */
    _getCategory() {
      getCategory().then(res => {
        // console.log(res);
        // 1. 获取菜单数据
        this.categories = res.data.category.list;

        // 2. 初始化每个类别的子数据
        for(let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            subCategoryDetails: {
              pop: [],
              new: [],
              sell: []
            }
          }
        }
        // 3. 请求第一个分类的子分类数据
        this._getSubCategory(0);
      }, err => {
        console.log(err);
      })
    },
    _getSubCategory(index) {
      // 1. 获取当前分类的索引值和maitKey
      this.currentMenuIndex = index;
      const maitKey = this.categories[index].maitKey;

      // 2. 发送网络请求
      getSubCategory(maitKey).then(res => {
        // console.log(res);
        this.categoryData[index].subcategories = res.data;
        this.categoryData = {...this.categoryData};

        // 3. 请求该分类的子分类的pop、new、sell的数据
        this._getSubCategoryDetail("pop");
        this._getSubCategoryDetail("new");
        this._getSubCategoryDetail("sell");
      }, err => {
        console.log(err);
      })
    },
    _getSubCategoryDetail(type) {
      // 1. 获取该分类的子分类的miniWallkey数据
      const miniWallkey = this.categories[this.currentMenuIndex].miniWallkey;

      // 2. 发送网络请求
      getSubCategoryDetail(miniWallkey, type).then(res => {
        // console.log(res);
        if(res) {
          this.categoryData[this.currentMenuIndex].subCategoryDetails[type] = res;
          this.categoryData = {...this.categoryData};
        }
      }, err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
  #categroy {
    height: 100vh;
  }

  .content {
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 9;
    display: flex;
  }

  .subContent {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
</style>