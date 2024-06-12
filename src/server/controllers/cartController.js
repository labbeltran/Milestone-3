import mongoose from 'mongoose';
import Cart from '../models/cart.js';


//get all cards
export const getCarts = async(req, res) => {
    const carts = await Cart.find({}).sort ({createdAt: -1})
    res.status(201).json(carts)
}

//get a single card
export const getCart = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no cart found'})

    }
    
    const cart = await Cart.findById(id)

    if(!cart){
        return res.status(404).json({error: 'no cart found'})
    }

    res.status(201).json(cart)
}

//create new card
export const createCart = async (req, res) => {
    const {} = req.body;
        try{
    
    const newCart = await Cart.create({});

    res.status(201).json(newCart);
        } catch (error) {
    res.status(400).json({ error: 'no cart found'});
        }
}

//delete a card
export const deleteCart = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no cart found'})
    }

    const cart = await Cart.findOneAndDelete({_id: id})

    if (!cart) {
        return res.status(404).json({error: 'no cart found'})
    }

    res.status(201).json(cart)
}


//update a card
export const updateCart = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no cart found'})
    }

    const cart = await Cart.findOneAndUpdate(
        {_id: id},
        { ...req.body },
        {new: true, runValidators: true}
    );

    if (!cart) {
        return res.status(404).json({error: 'no cart found'})
    }

    res.status(201).json(cart)
}