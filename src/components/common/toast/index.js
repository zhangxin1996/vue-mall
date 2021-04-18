import ToastComponent from "./Toast"

export default {
  install(Vue, options) {
    // 1. 创建组件构造器
    const ToastConstructor = Vue.extend(ToastComponent);

    // 2. 通过new的方式，根据组件构造器，创建toast组件对象
    const toast = new ToastConstructor();

    // 3. 将toast组件对象手动挂载到某一元素
    toast.$mount(document.createElement("div"));

    // 4. toast.$el对应的就是div
    document.body.appendChild(toast.$el);

    Vue.prototype.$myToast = toast;
  }
}