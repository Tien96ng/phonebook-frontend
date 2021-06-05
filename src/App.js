import React, { useState, useEffect, useContext } from 'react';
import { Context } from './appContext'

export default function App() {
  const { pokemon, peopleList } = useContext(Context);




  return(
    <>
      <h1> Hello World </h1>
      <h2>{pokemon.name}</h2>
      <h3>{peopleList.length}</h3>
    </>
  )
}