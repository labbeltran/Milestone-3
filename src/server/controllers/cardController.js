import axios from 'axios';
import * as yup from 'yup';
import { pokeCard } from '../models/pokeCard.js';

const API_KEY = process.env.API_KEY
const apiUrl = 'https://api.pokemontcg.io/v2/cards'


// get all pokemon cards
export const fetchPokemonCards = async (req, res) => {
  const { page = 1, pageSize = 20} =  req.query;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      params: {
        pageSize: parseInt(pageSize),
        page: parseInt(page)
      },
      timeout: 5000,
    });

    const cards = response.data.data; // The API response structure may vary

    const cardDetails = await Promise.all(cards.map(async (card) => {
        try {
            const cardResponse = await axios.get(`${apiUrl}/${card.id}`, {
                headers: {
                    'X-Api-Key': API_KEY,
                },
                timeout: 5000,
            });
            const data = cardResponse.data.data; // Adjust according to actual API response structure
        
            // Validate the response data against the schema
            const pokeCardValue = await pokeCard.validate(data, {stripUnknown: true});
        
            return pokeCardValue;
          } catch (error) {
            if (error instanceof yup.ValidationError) {
              console.error('Validation error:', error.errors);
            } else {
              console.error('API error:', error.message);
          }
          return null;
        }
      }));
      const validCards = cardDetails.filter(card => card !== null);

      res.json(validCards)
  } catch (error) {
    console.error('Error fetching data from Pokémon TCG API:', error);
  }
};


export const fetchPokemonCardById = async (req, res) => {
  const { id: cardId } = req.params;

  try {
      const response = await axios.get(`${apiUrl}/${cardId}`, {
          headers: {
              'X-Api-Key': API_KEY,
          },
      });

      const data = response.data.data;

      const pokeCardValue = await pokeCard.validate(data, { stripUnknown: true });

      res.json(pokeCardValue);
  } catch (error) {
      if (error instanceof yup.ValidationError) {
          console.error('Validation error:', error.errors);
      } else {
          console.error('API error:', error.message);
      }
  }
};

export const fetchPokemonCardByName = async (req, res) => {
  const { name: cardName } = req.params;

  try {
    const response = await axios.get(`${apiUrl}`, {
        headers: {
            'X-Api-Key': API_KEY,
        },
        params: {
          name: cardName,
        },
    });

    const data = response.data.data;

    const card = data.find(card => card.name.toLowerCase() === cardName.toLowerCase());

    if (!card) {
      return res.status(404).json({ message: 'Card with name ${cardName} not found' })
    }

    const pokeCardValue = await pokeCard.validate(card, { stripUnknown: true });

    res.json(pokeCardValue);
} catch (error) {
    if (error instanceof yup.ValidationError) {
        console.error('Validation error:', error.errors);
    } else {
        console.error('API error:', error.message);
    }
  } 
};

// fetchPokemonCardById('xy7-54');
// fetchPokemonCards();