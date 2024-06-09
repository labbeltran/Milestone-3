
import * as yup from 'yup';

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


export const pokeCard = pokeCardSchema


