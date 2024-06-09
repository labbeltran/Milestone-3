import mongoose from 'mongoose';
const { Schema } = mongooose;

const cartSchema = new Schema({

}, {timestamps: true});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;