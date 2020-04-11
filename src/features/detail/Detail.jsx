import React, { useState } from 'react';
import { useNavigate } from '@reach/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as _ from 'lodash';
import { getDetailPokemon, getPoke } from './detailSlice';

const Detail = ({id: nameId}) => {

    const {pokeDetail} = useSelector(getPoke);
    
    const dispatch = useDispatch();
  
    useEffect(()=> {
        dispatch(getDetailPokemon(nameId))
    } ,[]);


    return (
        <div className="container">
            <div className="row justify-content-center" style={{marginTop:'30px'}}>
                <div className="col-3" style={{textAlign: 'center', fontSize: '20px'}}>
                    {_.capitalize(pokeDetail?.name)}
                </div>
            </div>
            <div className="row" style={{marginTop:'30px'}}>
                <div className="col-1" style={{textAlign: 'center', fontSize: '20px'}}>
                    Weight: 
                </div>
                <div className="col-8 d-inline-flex" style={{alignSelf: 'center',fontSize: '16px'}}>
                    <span>{pokeDetail?.weight} </span>
                </div>
            </div>
            <div className="row" style={{marginTop:'8px'}}>
                <div className="col-1" style={{textAlign: 'center', fontSize: '20px'}}>
                    Ability: 
                </div>
                <div className="col-8 d-inline-flex align-items-center" 
                    style={{textAlign: 'center', fontSize: '16px'}}>
                {pokeDetail?.abilities?.map((val,i) => 
                    <span key={i} style={{margin: '0px 10px'}}>
                        {_.capitalize(val.ability.name)}
                    </span>
                )}
                </div>
            </div>
            <div className="row" style={{marginTop:'8px'}}>
                <div className="col-1" style={{textAlign: 'center', fontSize: '20px'}}>
                    Forms: 
                </div>
                <div className="col-8 d-inline-flex align-items-center" style={{textAlign: 'center', fontSize: '16px'}}>
                {pokeDetail?.forms?.map((val,i) => {
                    let split = val.url.split('/');

                    return (
                    <a href={`/detail/${split[split.length -2]}`} key={i} style={{margin: '0px 10px'}}>
                        {_.capitalize(val.name)}
                    </a>)
                })}
                </div>
            </div>
            <div className="row" style={{marginTop:'8px'}}>
                <div className="col-1" style={{textAlign: 'center', fontSize: '20px'}}>
                    Types: 
                </div>
                <div className="col-8 d-inline-flex align-items-center" style={{textAlign: 'center', fontSize: '16px'}}>
                {pokeDetail?.types?.map((val,i) => {
                    return (
                    <span key={i}  style={{margin: '0px 10px'}}>
                        {_.capitalize(val.type.name)}
                    </span>)
                })}
                </div>
            </div>
        </div>)
}

export default Detail;