import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
}, {timestamps: true});

const Item = mongoose.model('Item', itemSchema);

export default Item;