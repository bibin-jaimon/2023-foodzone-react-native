import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Restaurent } from '../../../model';

interface ItemDetailsState {
  selectedHotel: Restaurent | null;
}

const initialState: ItemDetailsState = {
  selectedHotel: null,
};

const itemDetailSlice = createSlice({
  name: 'itemDetails',
  initialState,
  reducers: {
    setSelectedHotel: (state, action: PayloadAction<Restaurent | null>) => {
      state.selectedHotel = action.payload;
    },
  },
});

export { itemDetailSlice };
