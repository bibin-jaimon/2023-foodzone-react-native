import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  itemMap: { [index: number]: number };
  currentResturentID: string | null;
  count: number;
}

const initialState: CartState = {
  itemMap: {},
  currentResturentID: null,
  count: 0,
};

interface UpdateCountPayload {
  id: number;
  count: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCount: (state, action: PayloadAction<UpdateCountPayload>) => {
      const { id, count } = action.payload;
      if (count === 0) {
        delete state.itemMap[id];
      } else {
        state.itemMap[id] = action.payload.count;
      }
    },
    updateCurrentResturentId: (state, action: PayloadAction<string>) => {
      state.currentResturentID = action.payload;
    },
    clearCart: state => {
      state.itemMap = {};
    },
    updateCartItemCount: state => {
      state.count = Object.keys(state.itemMap).length;
    },
  },
});

export { cartSlice };
