// MARK:- IMPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MARK:- USER MODEL SCHEMA
const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String},
    password: {type: String, required: true},
    role: {type: Number, default: 0, required: true},
    isPublic: {type: Boolean, default: true},
    favouriteItems: [
        { item: {
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
    followers: [
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
    itemsForRent: [
        { item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        }}
    ],
    itemsRentedOut: [
        { item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        }}
    ]
})

module.exports = User = mongoose.model('user', UserSchema);