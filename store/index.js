import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices';

export default configureStore({
  reducer: {
    users: userReducer,
  },
})