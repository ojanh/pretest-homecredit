import { createSlice } from '@reduxjs/toolkit';

export const sliceAuth = createSlice({
  name: 'authentication',
  initialState: {
    isAuth: false,
    token: ''
  },
  reducers: {
    setAuth: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state = Object.assign(state,payload);
    }
  },
});

export const { setAuth } = sliceAuth.actions;


export const getAuth = state => state.auth;

export default sliceAuth.reducer;
