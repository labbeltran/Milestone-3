import axios from 'axios';
import * as yup from 'yup';
import { pokeCard } from '../models/pokeCard.js';

const API_KEY = process.env.API_KEY
const apiUrl = 'https://api.pokemontcg.io/v2/cards'

// wait for data axios.get
const fetchWithRetry = async (url, options, retries = 5) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await axios.get(url, options);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          const waitTime = Math.pow(2, i) * 1000; // Exponential backoff
          console.warn(`Too many requests. Retrying in ${waitTime / 1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
        } else {
          throw error;
        }
      }
    }
    throw new Error('Max retries reached');
};

// get all pokemon cards
const fetchPokemonCards = async () => {
  try {
    const response = await fetchWithRetry(apiUrl, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });

    const cards = response.data.data; // The API response structure may vary

    for (const card of cards) {
        try {
            const cardResponse = await fetchWithRetry(`${apiUrl}/${card.id}`, {
                headers: {
                    'X-Api-Key': API_KEY,
                },
            });
            const data = cardResponse.data.data; // Adjust according to actual API response structure
        
            // Validate the response data against the schema
            await pokeCard.validate(data);
        
            console.log('Fetched and validated card:', data);
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

fetchPokemonCards();