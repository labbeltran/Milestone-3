import mongoose from 'mongoose';
import Item from '../models/item.js';

//get all cards
export const getItems = async(req, res) => {
    const items = await Item.find({}).sort ({createdAt: -1})
    res.status(201).json(items)
}

//get a single card
export const getItem = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no item found'})

    }
    
    const item = await Item.findById(id)

    if(!item){
        return res.status(404).json({error: 'no item found'})
    }

    res.status(201).json(item)
}

//create new card
export const createItem = async (req, res) => {
    const {} = req.body;
        try{
    
    const newItem = await Item.create({});

    res.status(201).json(newItem);
        } catch (error) {
    res.status(400).json({ error: error.message });
        }
}

//delete a card
export const deleteItem = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no item found'})
    }

    const item = await Item.findOneAndDelete({_id: id})

    if (!item) {
        return res.status(404).json({error: 'no item found'})
    }

    res.status(201).json(item)
}


//update a card
export const updateItem = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no item found'})
    }

    const item = await Item.findOneAndUpdate(
        {_id: id},
        { ...req.body },
        {new: true, runValidators: true}
    );

    if (!item) {
        return res.status(404).json({error: 'no item found'})
    }

    res.status(201).json(item)
}