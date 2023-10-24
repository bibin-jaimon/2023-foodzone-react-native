import { configureStore } from '@reduxjs/toolkit';
import { itemDetailSlice } from '../modules/item-details';

//slices

const RootStore = configureStore({
  reducer: {
    itemDetails: itemDetailSlice.reducer,
  },
});

export { RootStore };
export type RootState = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;
