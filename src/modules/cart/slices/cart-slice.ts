import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  itemMap: { [index: number]: number };
  currentResturentID: string | null;
}

const initialState: CartState = {
  itemMap: {},
  currentResturentID: null,
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
      state.itemMap[action.payload.id] = action.payload.count;
    },
    updateCurrentResturentId: (state, action: PayloadAction<string>) => {
      state.currentResturentID = action.payload;
    },
    clearCart: (state) => {
        state.itemMap = {}
    }
  },
});

export { cartSlice };
