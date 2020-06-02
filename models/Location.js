const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MARK:- LOCATION MODEL SCHEMA
const LocationSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true}
})

module.exports = Location = mongoose.model('location', LocationSchema);