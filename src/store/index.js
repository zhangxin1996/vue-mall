import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建store对象
let state = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// 3. 导出并在Vue实例上挂载
export default store