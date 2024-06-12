import { createSlice } from '@reduxjs/toolkit';

const systemsSlice = createSlice({
  name: 'systems',
  initialState: {
    systems: [],
  },
  reducers: {
    setSystems: (state, action) => {
      state.systems.push(action.payload);
    },
  },
});


export const { setSystems } = systemsSlice.actions;
export default systemsSlice.reducer;