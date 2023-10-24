import { configureStore } from '@reduxjs/toolkit';
import { itemDetailSlice } from '../modules/item-details';

//slices

const RootStore = configureStore({
  reducer: {
    itemDetailReducer: itemDetailSlice.reducer,
  },
});

export { RootStore };
