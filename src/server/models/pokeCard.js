import axios from 'axios';
import yup from 'yup';

const apiUrl = 'https://api.pokemontcg.io/v2/cards'
// Define a validation function
const pokeCardSchema = yup.object().shape({
  name: yup.string().required(),
  set: yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
  }),
  rarity: yup.string().required(),
  flavorText: yup.string().required(),
  images: yup.object().shape({
    small: yup.string().required(),
    large: yup.string().required(),
  }),
  tcgplayer: yup.object().shape({
    prices: yup.object().required(),
    }),
  cardmarket: yup.object().shape({
    prices: yup.object().required(),
    }),
})

const fetchPokemonCard = async (cardId) => {
  try {
    const response = await axios.get(`${apiUrl}/${cardId}`);
    const data = response.data.data; // Adjust according to actual API response structure

    // Validate the response data against the schema
    await pokeCardSchema.validate(data);

    console.log('Fetched and validated card:', data);
    return data;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      console.error('Validation error:', error.errors);
    } else {
      console.error('API error:', error.message);
    }
    return null;
  }
};

fetchPokemonCard('xy7-54')
  .then(card => {
    if (card) {
      console.log('Fetched and validated card:', card);
    } else {
      console.log('Failed to fetch or validate card');
    }
  });


