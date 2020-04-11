import React from 'react'
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuth } from '../../app/authSlice';


export const sliceHome = createSlice({
    name: 'appSlice',
    initialState: {
      pokeApi: {results: []}
    },
    reducers: {
      getPokeList(state, {payload}) {
        
        state.pokeApi = payload.result;
      }
    },
  });
  
const { getPokeList } = sliceHome.actions;

export const getPokeState = state => state.home;

export const doGetPokeList = (page) => dispatch => {
  console.log(page);
  
    axios.get('https://pokeapi.co/api/v2/pokemon', {params: {offset: page, limit: 60}}).then(res=>{

        dispatch(getPokeList({result: res.data}))
    }, err => {
        
        dispatch(setAuth({  
            isAuth: false
        }))
    })
};

export default sliceHome.reducer;
  