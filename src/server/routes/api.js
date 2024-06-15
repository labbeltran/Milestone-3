import express from 'express';
import {fetchPokemonCardById, fetchPokemonCards, fetchPokemonCardByName} from '../controllers/cardController.js';

//Router
const router = express.Router();

//Pokemon cards
router.get('/cards', fetchPokemonCards);
router.get('/cards/:id', fetchPokemonCardById);
router.get('/cards/name/:name', fetchPokemonCardByName);


export default router;