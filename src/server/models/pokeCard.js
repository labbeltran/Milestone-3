
import * as yup from 'yup';

// Define a validation function
const pokeCardSchema = yup.object().shape({
  name: yup.string().required(),
  set: yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
  }),
  rarity: yup.string(),
  flavorText: yup.string(),
  images: yup.object().shape({
    small: yup.string(),
    large: yup.string(),
  }),
  tcgplayer: yup.object().shape({
    prices: yup.object(),
    }),
  cardmarket: yup.object().shape({
    prices: yup.object().shape({
      averageSellPrice: yup.number().required()
    }),
    }),
})


export const pokeCard = pokeCardSchema


