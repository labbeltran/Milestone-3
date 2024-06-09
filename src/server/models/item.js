import mongoose from 'mongoose';
const { Schema } = mongooose;

const itemSchema = new Schema({

}, {timestamps: true});

const Item = mongoose.model('Item', itemSchema);

export default Item;