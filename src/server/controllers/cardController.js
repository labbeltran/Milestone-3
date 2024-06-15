import axios from 'axios';
import * as yup from 'yup';
import { pokeCard } from '../models/pokeCard.js';

const API_KEY = process.env.POKE_API_KEY
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

    const data = response.data.data

    // Validate each card object against the defined schema using Yup
    const validatedCards = await Promise.all(data.map(async (card) => {
      try {
        await pokeCard.validate(card, { stripUnknown: true });
        return card; // Return the validated card object
      } catch (error) {
        console.error('Validation error for card:', error.errors);
        return null; // Return null for invalid cards
      }
    }));
      const validCards = validatedCards.filter(card => card !== null);

      res.json(validCards)
  } catch (error) {
    console.error('Error fetching data from Pokémon TCG API:', error);
    res.status(500).json({ error: 'Failed to fetch or validate data from Pokémon TCG API' });
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
          q: `name:${cardName}`,
          pageSize: 5,
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