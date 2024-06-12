import { configureStore } from '@reduxjs/toolkit';
import systemsReducer from './systemsSlice';


export default configureStore({
  reducer: {
    systems: systemsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()},
})
