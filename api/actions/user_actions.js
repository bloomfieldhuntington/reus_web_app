// MARK:- IMPORTS
const express = require('express');
const { check, validationResult } = require('express-validator');
const user_middlware = require('../../middleware/user_middleware');
// MARK:- Initialize Router
const router = express.Router();
// MARK:- MODEL
const User = require('../../models/User');
const Item = require('../../models/Item');

// MARK:- ROUTES

// ROUTE: api/user/actions/get/favourites
// DESCRIPTION: Get favouriteItems
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/favourites', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id});
        if (!user) {
            return res.status(404).json({msg: 'No User found'});
        } else {
            var m_idArray = [];
            user.favouriteItems.forEach(item => {
                m_idArray.push(item.item);
            })
            const favourites = await Item.find({ _id: {$in: m_idArray}});
            if (!favourites) {
                return res.status(404).json({msg: 'No items found'});
            } else {
                res.json(favourites)
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/add/favourites/:item_id
// DESCRIPTION: Add Item to favouriteItems
// ACCESS: PRIVATE
// TYPE: POST
router.post('/add/favourites/:item_id', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'No User Found'});
        } else {
            const item = await Item.findOne({ _id: req.params.item_id });

            const index = await user.favouriteItems.findIndex(item => item.item == req.params.item_id);
            if (index != -1) {
                return res.status(400).json({msg: 'Already Added'});
            }
            if (!item) {
                return res.status(404).json({msg: "No item found"});
            } else {
                user.favouriteItems.push({ item: item._id });
                user.save();
            }
        }
        res.json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/remove/favourites/:item_id
// DESCRIPTION: remove Item to favouriteItems
// ACCESS: PRIVATE
// TYPE: POST
router.post('/remove/favourites/:item_id', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'No User Found'});
        } else {
            const item = await Item.findOne({ _id: req.params.item_id });

            const index = await user.favouriteItems.findIndex(item => item.item == req.params.item_id);
            if (index == -1) {
                return res.status(400).json({msg: 'You dont follow this account'});
            }
            if (!item) {
                return res.status(404).json({msg: "No item found"});
            } else {
                user.favouriteItems.splice(index, 1);
                user.save();
            }
        }
        res.json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/get/reserved/
// DESCRIPTION: Get reserved items
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/reserved', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id});
        if (!user) {
            return res.status(404).json({msg: 'No User found'});
        } else {
            var m_idArray = [];
            user.reservedItems.forEach(item => {
                m_idArray.push(item.item);
            })
            const reserved_items = await Item.find({ _id: {$in: m_idArray}});
            if (!reserved_items) {
                return res.status(404).json({msg: 'No items found'});
            } else {
                res.json(reserved_items)
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/add/reserved/:item_id
// DESCRIPTION: Add Item to reserved items
// ACCESS: PRIVATE
// TYPE: POST
router.post('/add/reserved/:item_id', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'No User Found'});
        } else {
            const item = await Item.findOne({ _id: req.params.item_id });
            if (!item) return res.status(404).json({msg: 'No item found'})

            const index = await user.reservedItems.findIndex(item => item.item == req.params.item_id);
            if (index != -1) {
                return res.status(400).json({msg: 'Already Added'});
            }
            if (!item) {
                return res.status(404).json({msg: "No item found"});
            } else {
                // add item to productOwner array test
                const itemOwner = await User.findOne({_id: item.itemOwner});
                if (!itemOwner) return res.status(404).json({msg: 'No Item owner found'})
                itemOwner.itemsRentedOut.push(item);
                itemOwner.save();
                user.reservedItems.push({ item: item._id });
                user.save();
                item.isAvailable = false;
                item.save();
            }
        }
        res.json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/remove/reserved/:item_id
// DESCRIPTION: Add Item to reserved items
// ACCESS: PRIVATE
// TYPE: POST
router.post('/remove/reserved/:item_id', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'No User Found'});
        } else {
            const item = await Item.findOne({ _id: req.params.item_id });
            if (!item) return res.status(404).json({msg: 'No item found'})

            // check if already enrolled & for max 5 solvers
            const index = await user.reservedItems.findIndex(item => item.item == req.params.item_id);
            if (index == -1) {
                return res.status(400).json({msg: 'You dont follow this account'});
            }
            if (!item) {
                return res.status(404).json({msg: "No item found"});
            } else {
                user.reservedItems.splice(index, 1);
                user.save();
                item.isAvailable = true;
                item.save();
            }
        }
        res.json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/get/followers
// DESCRIPTION: Get my followers
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/followers', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        } else {
            var m_usersArray = [];
            user.followers.forEach(user => {
                m_usersArray.push(user.user);
            });
            const followers = await User.find({ _id: { $in: m_usersArray }});
            if (!followers){
                return res.status(404).json({msg: 'No Followers Found'});
            } else {
                res.json(followers);
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'})
        
    }
})

// ROUTE: api/user/actions/get/following
// DESCRIPTION: Get who i'm following
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/following', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        } else {
            var m_usersArray = [];
            user.following.forEach(user => {
                m_usersArray.push(user.user);
            });
            const following = await User.find({ _id: { $in: m_usersArray }});
            if (!following){
                return res.status(404).json({msg: 'No following Found'});
            } else {
                res.json(following);
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'})
        
    }
})

// ROUTE: api/user/actions/follow/:user_id
// DESCRIPTION: Follow user with user_id
// ACCESS: PRIVATE
// TYPE: POST
router.post('/follow/:user_id', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.user_id });
        const my_user = await User.findOne({ _id: req.user.id });
        if (!user || !my_user) {
            return res.status(404).json({msg: 'No User Found'});
        } else {
            const index = await user.followers.findIndex(user => user.user == req.user.id);
            const my_index = await my_user.following.findIndex(user => user.user == req.params.user_id);
            if (index != -1 || my_index != -1) {
                return res.status(400).json({msg: 'Already Added'});
            } else {
                user.followers.push({ user: req.user.id });
                user.save();
                my_user.following.push({ user: req.params.user_id });
                my_user.save();
            }
        }
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/unfollow/:user_id
// DESCRIPTION: Unfollow user with user_id
// ACCESS: PRIVATE
// TYPE: POST
router.post('/unfollow/:user_id', user_middlware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.user_id });
        const my_user = await User.findOne({ _id: req.user.id });
        if (!user || !my_user) {
            return res.status(404).json({msg: 'No User Found'});
        } else {
            const index = await user.followers.findIndex(user => user.user == req.user.id);
            const my_index = await my_user.following.findIndex(user => user.user == req.params.user_id);
            if (index > -1 || my_user > -1) {
                user.followers.splice(index, 1);
                user.save();
                my_user.following.splice(index, 1);
                my_user.save();
            } else {
                return res.status(404).json({msg: 'You dont follow this account'});
            }
        }
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
});

// ROUTE: api/user/actions/set/public_profile
// DESCRIPTION: Set is public
// ACCESS: PRIVATE
// TYPE: POST
router.post('/set/public_profile', [user_middlware, [
    check('isPublic', 'Must be true or false').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { isPublic } = req.body;
    const userField = {};
    if (isPublic) userField.isPublic = isPublic;
    try {
        const user = await User.findOne({ _id: req.user.id });
        if (!user) {
            return res.status(404).json({msg: 'No User found'});
        } else {
            const m_user = await User.findOneAndUpdate(
                { _id: req.user.id },
                { $set: userField },
                { new: true }
            )
            return res.json(m_user)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})


module.exports = router;