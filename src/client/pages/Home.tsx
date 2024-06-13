import { useDispatch } from 'react-redux';
import React from 'react';
import PokemonLogo from '../assets/Pokemon.svg';
import './Home.css'

export function Home() {
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <h1 className="home-header">LAMM Pokemon Card Store</h1>
      <p className="home-paragraph">Welcome to the LAMM Pokemon Card Store!</p>
      <img src={PokemonLogo} className="home-logo" alt="Pokemon logo" />
    </div> 
  );
}