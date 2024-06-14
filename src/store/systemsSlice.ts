import { createSlice } from '@reduxjs/toolkit';
import { System } from '../shared/Types';



const initialState: System[] = [];

const systemsSlice = createSlice({
  name: 'systems',
  initialState: initialState,
  reducers: {
    setSystems: (state, action) => {
      state.push(action.payload);
    },
  },
});


export const { setSystems } = systemsSlice.actions;
export default systemsSlice.reducer;