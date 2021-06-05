import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {
  const [pokemon, setPokemon] = useState({});
  const [peopleList, setPeopleList] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getPokemon = (id) => {
    axios.get(process.env.REACT_APP_POKEMON_API_KEY + id)
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
    let randomPokemonId = Math.floor(Math.random() * 804);
    getPokemon(randomPokemonId);
    getAll();
  }, [])

  return(
    <>
      <h1> Hello World </h1>
      <h2>{pokemon.name}</h2>
      <h3>{peopleList.length}</h3>
    </>
  )
}