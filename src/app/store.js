import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import detailReducer from '../features/detail/detailSlice';
import appReducer from "./appSlice";
import  homeReducer from "../features/home/homeSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    detail: detailReducer,
    app: appReducer,
    home: homeReducer,
  },
});
