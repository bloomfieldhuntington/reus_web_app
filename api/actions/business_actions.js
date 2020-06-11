// MARK:- IMPORTS
const express = require('express');
const { check, validationResult } = require('express-validator');
const business_middlware = require('../../middleware/business_middleware');
// MARK:- Initialize Router
const router = express.Router();
// MARK:- MODEL
const User = require('../../models/User');
const Item = require('../../models/Item');

// ROUTE: api/business/actions/get/items_for_rent
// DESCRIPTION: Get Items for rent
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/items_for_rent', business_middlware, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id});
        if (!user) {
            return res.status(404).json({msg: 'No User found'});
        } else {
            var m_idArray = [];
            user.itemsForRent.forEach(item => {
                m_idArray.push(item.item);
            })
            const items_for_rent = await Item.find({ _id: {$in: m_idArray}});
            if (!items_for_rent) {
                return res.status(404).json({msg: 'No items found'});
            } else {
                res.json(items_for_rent)
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})

// ROUTE: api/business/actions/get/items_rented_out
// DESCRIPTION: Get items rented out
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/items_rented_out', business_middlware, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id});
        if (!user) {
            return res.status(404).json({msg: 'No User found'});
        } else {
            var m_idArray = [];
            user.itemsRentedOut.forEach(item => {
                m_idArray.push(item);
            })
            const items_rented_out = await Item.find({ _id: {$in: m_idArray}});
            if (!items_rented_out) {
                return res.status(404).json({msg: 'No items found'});
            } else {
                res.json(items_rented_out)
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})

module.exports = router;