// hotelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    sequence: ''
  },
  reducers: {
    setSequence: (state, action) => {
      state.sequence = action.payload;
    }
  }
});

export const { setSequence } = hotelSlice.actions;
export default hotelSlice.reducer;
