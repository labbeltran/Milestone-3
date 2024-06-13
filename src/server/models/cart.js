import mongoose from 'mongoose';
import Item from './item.js'
const { Schema } = mongoose;

const cartSchema = new Schema({
    items: [Item],
    total: { type: Number, required: true, min: 0 },
    userId: { type: String, required: true },
}, {timestamps: true});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;