import express from 'express';
import {createCard, getCard, getCards, updateCard, deleteCard} from'./pokeCardController.js';

//Router
const router = express.Router();

//Routes
router.get('/cards', getCards);
router.post('/cards', createCard);
router.get('/cards', getCard);
router.patch('/cards', updateCard);
router.delete('/cards', deleteCard);

router.get('*', (req, res) => {
    res.json('404')
});

export default router;