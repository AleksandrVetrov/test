import { configureStore } from '@reduxjs/toolkit';
import systemsReducer from './systemsSlice';
import informationReducer from './informationSlice'



const store =  configureStore({
  reducer: {
    systems: systemsReducer,
    information: informationReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()},
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
