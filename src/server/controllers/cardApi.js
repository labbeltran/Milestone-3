import axios from 'axios';
import * as yup from 'yup';
import { pokeCard } from '../models/pokeCard.js';

const API_KEY = process.env.API_KEY
const apiUrl = 'https://api.pokemontcg.io/v2/cards'


// get all pokemon cards
const fetchPokemonCards = async (page = 1, pageSize = 20) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      params: {
        pageSize: pageSize,
        page: page
      }
    });

    const cards = response.data.data; // The API response structure may vary

    for (const card of cards) {
        try {
            const cardResponse = await axios.get(`${apiUrl}/${card.id}`, {
                headers: {
                    'X-Api-Key': API_KEY,
                },
            });
            const data = cardResponse.data.data; // Adjust according to actual API response structure
        
            // Validate the response data against the schema
            const pokeCardValue = await pokeCard.validate(data, {stripUnknown: true});
        
            console.log('Fetched and validated card:', pokeCardValue);
          } catch (error) {
            if (error instanceof yup.ValidationError) {
              console.error('Validation error:', error.errors);
            } else {
              console.error('API error:', error.message);
          }
        }
    }
  } catch (error) {
    console.error('Error fetching data from Pokémon TCG API:', error);
  }
};


const fetchPokemonCardById = async (cardId) => {
  try {
      const response = await axios.get(`${apiUrl}/${cardId}`, {
          headers: {
              'X-Api-Key': API_KEY,
          },
      });

      const data = response.data.data;

      const pokeCardValue = await pokeCard.validate(data, { stripUnknown: true });

      console.log('Fetched and validated card:', pokeCardValue);
  } catch (error) {
      if (error instanceof yup.ValidationError) {
          console.error('Validation error:', error.errors);
      } else {
          console.error('API error:', error.message);
      }
  }
};


fetchPokemonCardById('xy7-54');

fetchPokemonCards();