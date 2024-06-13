import express from 'express';
import {fetchPokemonCardById, fetchPokemonCards, fetchPokemonCardByName} from '../controllers/cardController.js';
import {createItem, getItem, getItems, updateItem, deleteItem} from '../controllers/itemController.js';
import {createUser, getUser, getUsers, updateUser, deleteUser} from '../controllers/userController.js';


//Router
const router = express.Router();

//Routes

//Pokemon cards
router.get('/cards', fetchPokemonCards);
router.get('/cards/:id', fetchPokemonCardById);
router.get('/cards/name/:name', fetchPokemonCardByName);

//Items controller
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//Users controller
router.get('/items', getItems);
router.post('/items', createItem);
router.get('/items/:id', getItem);
router.patch('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);


export default router;