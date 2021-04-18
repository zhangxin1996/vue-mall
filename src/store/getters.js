export default {
  cartList(state) {
    return state.cart;
  },
  cartLength(state, getters) {
    return getters.cartList.length;
  },

}