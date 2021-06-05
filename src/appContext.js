import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const Context = createContext();

function ContextProvider({children}) {
  const [pokemon, setPokemon] = useState({});
  const [peopleList, setPeopleList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPokemon = () => {
    let randomPokemonId = Math.floor(Math.random() * 804);
    axios.get(process.env.REACT_APP_POKEMON_API_KEY + randomPokemonId)
    .then(res => {
      console.log(res.data);
      setPokemon(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  const getAll = () => {
    axios.get(process.env.REACT_APP_BACKEND_SERVER)
      .then(res => {
        console.log(res.data);
        setPeopleList(res.data);
      })
      .catch(error => {
        console.log(error)
      });
  };

  useEffect(() => {
    getPokemon();
    getAll();
  }, [])

  return(
    <Context.Provider value={{
      pokemon,
      peopleList,
      isLoading
    }}>
      {children}
    </Context.Provider>
  )
};



export { ContextProvider, Context };