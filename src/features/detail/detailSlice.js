import Axios from "axios"
import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: 'register',
    initialState: {
      pokeDetail: {}
    },
    reducers: {
        setPokemonDetail: (state, {payload: result}) =>{
            state.pokeDetail = result;
        }
    }
});

const {setPokemonDetail} = detailSlice.actions

export const getDetailPokemon = (id) => dispatch => {

    Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
        dispatch(setPokemonDetail(res.data));
    })
}

export const getPoke = state => state.detail;


export default detailSlice.reducer;
