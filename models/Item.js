const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MARK:- ITEM MODEL SCHEMA
const ItemSchema = new Schema({
    itemOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    internalReference: {type: String, required: true},
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
    tags: {type: Array},
    meta: {
        productViews: {type: Number, default: 0},
        timesRented: {type: Number, default: 0}
    },
    rentedBy: [
        { user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }}
    ]
})

module.exports = Item = mongoose.model('item', ItemSchema);