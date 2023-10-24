import { createSlice } from '@reduxjs/toolkit';

const itemDetailSlice = createSlice({
  name: 'itemDetails',
  initialState: {
    selectedHotel: {},
  },
  reducers: {
    setSelectedHotel: (state, action) => {
      console.log({ action });

      state.selectedHotel = action.payload;
    },
  },
});

export { itemDetailSlice };
