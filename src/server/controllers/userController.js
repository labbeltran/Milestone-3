import mongoose from 'mongoose';
import User from '../models/user.js'

//get all cards
export const getUsers = async(req, res) => {
    const users = await User.find({}).sort 
    res.status(201).json(users)
}

//get a single card
export const getUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no user found'})

    }
    
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: 'no user found'})
    }

    res.status(201).json(user)
}

//create new card
export const createUser = async (req, res) => {
    const {} = req.body;
        try{
    
    const newUser = await User.create({});

    res.status(201).json(newUser);
        } catch (error) {
    res.status(400).json({ error: error.message });
        }
}

//delete a card
export const deleteUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no user found'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(404).json({error: 'no user found'})
    }

    res.status(201).json(user)
}


//update a card
export const updateUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no user found'})
    }

    const user = await User.findOneAndUpdate(
        {_id: id},
        { ...req.body },
        {new: true, runValidators: true}
    );

    if (!user) {
        return res.status(404).json({error: 'no user found'})
    }

    res.status(201).json(newUser)
}