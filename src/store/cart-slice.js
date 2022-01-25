import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed : false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!exitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exitingItem.quantity++;
        exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (exitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exitingItem.quantity--;
        exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;