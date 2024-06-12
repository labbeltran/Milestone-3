import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({

}, {timestamps: true});

const Item = mongoose.model('Item', itemSchema);

export default Item;