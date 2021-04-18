import Vue from 'vue'

import router from "./router"
import store from "./store"

import App from './App.vue'

// 安装自定义Toast插件
import toastRegistry from "components/common/toast"
// 安装图片懒加载
import VueLazyLoad from 'vue-lazyload'
// 解决移动端300ms延迟
import FastClick from 'fastclick'

Vue.use(toastRegistry)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  loading: require("./assets/img/common/placeholder.png")
})
FastClick.attach(document.body);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue({})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
