// MARK:- IMPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MARK:- USER MODEL SCHEMA
const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, default: 0, required: true},
    favouriteItems: [
        { favourite: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        }}
    ],
    reservedItems: [
        { item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        }}
    ],
    follows: [
        { user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }}
    ],
    following: [
        { user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }}
    ],
    currentRentals: [
        { rental: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        }}
    ],
    
})
module.exports = User = mongoose.model('user', UserSchema);