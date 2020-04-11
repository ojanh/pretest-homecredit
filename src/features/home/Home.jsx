import React, { useState, useCallback } from 'react';
import { useNavigate } from '@reach/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokeState, doGetPokeList } from './homeSlice';
import * as _ from "lodash";


const Home = () => {
    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const {pokeApi} = useSelector(getPokeState);

    const [page, setPage] = useState(0);
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(()=>{
        dispatcher(doGetPokeList(page));
        setPage(1);
    }, []);
    useEffect(()=>{
        window.onscroll = () => {
            if ( window.innerHeight + document.documentElement.scrollTop
              === document.documentElement.offsetHeight ) {
              dispatcher(doGetPokeList(page))
              setPage(page+1);
            }
        }
    }, [page]);
    useEffect(()=>{
        setPokemonData([...pokemonData, ...pokeApi.results]);
    }, [pokeApi]);
    
    function goToDetail(url) {
        let split = url.split('/');
        let id = split[split.length - 2];

        navigate('/detail/'+id);
    }


    return (
    <div className="container" >
        <div className="row" style={{'justifyContent':'center'}}>
           {pokemonData.map((val,i) => (
               <div key={i} className="col-8 d-flex" style={{justifyContent: 'space-between'}}>
                   <div className="col-3">
                       {val.name}
                   </div>
                   <div className="col-6" style={{textAlign: 'right', marginBottom: '10px'}}>
                       <button onClick={()=>goToDetail(val.url)}>Detail</button>
                   </div>
               </div>
           ))}
        </div>
    </div>)
}

export default Home;