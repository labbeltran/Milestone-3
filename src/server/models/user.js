import mongoose from 'mongoose';
const { Schema } = mongooose;

const userSchema = new Schema({

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;