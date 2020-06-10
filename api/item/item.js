const express = require('express');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const path = require('path');
const config = require('../../config/keys');
// Middleware
const admin_middlware = require('../../middleware/admin_middleware');
const business_middlware = require('../../middleware/business_middleware');
const user_middlware = require('../../middleware/user_middleware');
// Models
const Item = require('../../models/Item');
const User = require('../../models/User');

const router = express.Router();

// Upload setup
const connect = mongoose.createConnection(config.MONGODB_URI);
// stream init
var gfs;
connect.once('open', (req, res) => {
    gfs = Grid(connect.db, mongoose.mongo);
    gfs.collection('uploadedImages')
})
// Create Storage
const storage = new GridFsStorage({
    url: config.MONGODB_URI,
    file: (req, file) => {
        return new Promise( (resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo)
            })
        })
    }
})
const upload = multer({ storage });

// MARK:- BUSINESS

// ROUTE: api/item/create
// DESCRIPTION: CREATE ITEM
// ACCESS: PRIVATE
// TYPE: POST
router.post('/create', [business_middlware, [
    check('internalReference', 'Used to identify identical items').not().isEmpty(),
    check('brand', 'Please Add your brand').not().isEmpty(),
    check('title', 'Must have a title').not().isEmpty(),
    check('subTitle', 'Must have subtitle').not().isEmpty(),
    check('description', 'Requred').not().isEmpty(),
    check('size', 'Requred').not().isEmpty(),
    check('category', 'Requred').not().isEmpty(),
    check('segment', 'Requred').not().isEmpty(),
    check('price', 'Requred').not().isEmpty(),
    check('locations', 'Must be available in at least 1 location')
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({msg: errors.array()});

    const {
        internalReference,
        brand,
        title,
        subTitle,
        description,
        size,
        category,
        segment,
        price,
        tags,
        productImages
    } = req.body;
    const itemFields = {}
    itemFields.itemOwner = req.user.id;
    if (internalReference) itemFields.internalReference = internalReference;
    if (brand) itemFields.brand = brand;
    if (title) itemFields.title = title;
    if (subTitle) itemFields.subTitle = subTitle;
    if (description) itemFields.description = description;
    if (size) itemFields.size = size;
    if (category) itemFields.category = category;
    if (segment) itemFields.segment = segment;
    if (price) itemFields.price = price;
    if (tags) itemFields.tags = tags;

    try {
        const newItem = new Item(itemFields);
        newItem.save();

        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        } else {
            user.itemsForRent.push({ item: newItem });
            user.save();
        }
        res.json(newItem);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});   
    }
})

// ROUTE: api/item/get/all
// DESCRIPTION: GET ALL MY ITEMS
// ACCESS: PRIVATE
// TYPE: POST
router.get('/get/all', business_middlware, async (req, res) => {
    try {
        const items = await Item.find({ itemOwner: req.user.id });
        if (!items) {
            return res.status(400).json({msg: 'No items found'});
        } else {
            res.json(items);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})

// ROUTE: api/item/get/:item_id
// DESCRIPTION: GET ONE ITEM BY ID
// ACCESS: PRIVATE
// TYPE: POST
router.get('/get/:item_id', business_middlware, async (req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.item_id });
        if (!item) {
            return res.status(404).json({msg: 'No post found'});
        } else {
            res.json(item);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})

// ROUTE: api/item/get/rented_by
// DESCRIPTION: Get user who rented Item
// ACCESS: PRIVATE
// TYPE: POST
router.get('/get/rented_by/:item_id', business_middlware, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
    try {
        const item = await Item.findOne({ _id: req.params.item_id });
        if (!item) {
            return res.status(404).json({msg: 'No Item found'});
        } else {
            res.json(item.rentedBy);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/item/set/rented_by/
// DESCRIPTION: SET RENTEE
// ACCESS: PRIVATE
// TYPE: POST
router.post('/set/rented_by/:item_id', [business_middlware, [
    check('renter_id', 'Please enter the _id of the rentee').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { renter_id } = req.body;
    
    try {
        const item = await Item.findOneAndUpdate({ _id: item_id });
        if (!item) {
            return res.status(404).json({msg: 'No Item found'});
        } else {
            item.rentedBy.push({ user: renter_id })
            item.meta.timesRented++;
            item.save();
            res.json(item)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/item/get/times_rented/:item_id
// DESCRIPTION: GET timesRented
// ACCESS: PRIVATE
// TYPE: POST
router.post('/get/times_rented/:item_id', business_middlware, async (req, res) => {
    try {
        
        // Get item
        const item = Item.findOne({ _id: req.params.item_id });
        if (!item) {
            return res.status(404).json({ msg: 'No Item Found'});
        } else {
            res.json(item.meta.timesRented);
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/item/add/location/:item_id
// DESCRIPTION: ADD LOCATION TO ITEM
// ACCESS: PRIVATE
// TYPE: POST
router.post('/add/location/:item_id', [business_middlware, [
    check('locations', 'Please add a location').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
    const { locations } = req.body;
    const locationFields = {};
    if (locations) locationFields.locations = locations;

    try {

        // CREATE A LOCATION OBJET HERE, STORE ITS ID IN THE LOCAITON ARRAY.

        const item = await Item.findOne({ _id: req.params.item_id });
        if (!item) {
            return res.status(404).json({msg: 'No item found'})
        } else {
            item.locations.push(locationFields);
            item.save();
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/item/user/get/all
// DESCRIPTION: GET ALL ITEMS USER
// ACCESS: PRIVATE
// TYPE: GET
router.get('/user/get/all', user_middlware, async (req, res) => {
    try {
        const items = await Item.find();
        if (!items) {
            return res.status(400).json({msg: 'No items found'});
        } else {
            res.json(items);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})

// ROUTE: api/item/user/get/:item_id
// DESCRIPTION: GET ONE ITEM BY ID
// ACCESS: PRIVATE
// TYPE: POST
router.get('/user/get/:item_id', user_middlware, async (req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.item_id });
        if (!item) {
            return res.status(404).json({msg: 'No post found'});
        } else {
            res.json(item);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})

module.exports = router;