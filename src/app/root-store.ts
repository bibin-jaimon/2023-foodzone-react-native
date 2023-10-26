import { configureStore } from '@reduxjs/toolkit';
import { itemDetailSlice } from '../modules/item-details';
import { cartSlice } from '../modules/cart';

//slices

const RootStore = configureStore({
  reducer: {
    itemDetails: itemDetailSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export { RootStore };
export type RootState = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;
