import { createSlice } from "@reduxjs/toolkit";

export const sliceApp = createSlice({
    name: 'appSlice',
    initialState: {
      isError: false,
      errorMessage: '',
      isLoading: false
    },
    reducers: {
      setLoading: (state, {payload: {isLoading}}) => {
        state = {...state, isLoading};
      }
    },
  });
  
  export const { setLoading } = sliceApp.actions;
  
  
  export const getAuth = state => state.auth;
  
  export default sliceApp.reducer;