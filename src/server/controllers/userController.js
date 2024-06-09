import mongoose from 'mongoose';
import PokeCard from '../models/pokeCard';


//get all cards
export const getCards = async(req, res) => {
    const cards = await Card.find({}).sort 
    res.status(201).json(cards)
}

//get a single card
export const getCard = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no card found'})

    }
    
    const card = await Card.findById(id)

    if(!card){
        return res.status(404).json({error: 'no card found'})
    }

    res.status(201).json(card)
}

//create new card
export const createCard = async (req, res) => {
    const {} = req.body;
        try{
    
    const newCard = await Card.create({});

    res.status(201).json(newCard);
        } catch (error) {
    res.status(400).json({ error: error.message });
        }
}

//delete a card
export const deleteCard = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no card found'})
    }

    const card = await Card.findOneAndDelete({_id: id})

    if (!card) {
        return res.status(404).json({erro: 'no card found'})
    }

    res.status(201).json(card)
}


//update a card
export const updateCard = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no card found'})
    }

    const card = await Card.findOneAndUpdate(
        {_id: id},
        { ...req.body },
        {new: true, runValidators: true}
    );

    if (!card) {
        return res.status(404).json({error: 'no card found'})
    }

    res.status(201).json(newCard)
}