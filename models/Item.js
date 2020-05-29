const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MARK:- ITEM MODEL SCHEMA
const ItemSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    brand: {type: String, required: true},
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    description: {type: String, required: true},
    size: {type: String, required: true},
    category: {type: String, required: true},
    segment: {type: String, required: true},
    price: {type: String, required: true},
    locations: {type: Array},
    productImages: {type: Array},
    isNews: {type: Boolean, default: false},
    isTrending: {type: Boolean, default: false},
    isAvailable: {type: Boolean, default: true},
    meta: {
        productViews: {type: Number, default: 0},
        timesRented: {type: Number, default: 0}
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);