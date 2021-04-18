import {ADD_COUNTER, ADD_TO_CART} from "./mutation-types"

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1. 查找有无此商品
      let oldProduct = context.state.cart.find(item => item.id === payload.id);

      // 2. 进行判断
      if(oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("商品数量+1");
      } else {
        payload.count = 1;
        payload.isChecked = true;
        context.commit(ADD_TO_CART, payload);
        resolve("成功添加到购物车");
      }
    })
  }
}