// MARK:- IMPORTS
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const user_middlware = require('../../middleware/user_middleware');
const config = require('../../config/keys');
// MARK:- Initialize Router
const router = express.Router();
// MARK:- MODEL
const User = require('../../models/User');

// MARK:- ROUTES

// ROUTE: api/user/auth/register
// DESCRIPTION: CREATE USER
// ACCESS: PUBLIC
// TYPE: POST
router.post('/register', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 7 long').isLength({min: 7}),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {username, email, password, role} = req.body;

    try {
        // Check if email & user already exist in db
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({msg: 'User already exist'});
        }
        const usernameExist = await User.findOne({ username });
        if (usernameExist) {
            return res.status(400).json({msg: 'Username already exist'});
        }
        // Create user
        let user = new User({
            username,
            email,
            password,
            role
        });
        user.role = 0;
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        // Hash password
        user.password = await bcrypt.hash(password, salt);
        // Save user to database
        await user.save();
        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        }
        // Sign payload
        jwt.sign(payload, config.USER_SECRET, {expiresIn: 36000}, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

// ROUTE: api/user/auth/login
// DESCRIPTION: LOGIN USER & GET TOKEN
// ACCESS: PUBLIC
// TYPE: POST
router.post('/login', [
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Please enter a password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
        // Check for user in db
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{msg: 'Invalid username or password'}]});
        } else if (user.role !== 0) {
            return res.status(400).json({ errors: [{msg: 'I think you are a Business user?'}]});
        }
        // Compare input password with db password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{msg: 'Invalid username or password'}]});
        }
        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        }
        // Sign payload
        jwt.sign(payload, config.USER_SECRET, {expiresIn: 36000}, (err, token) => {
            if (err) throw err;
            res.json({token})
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'})
    }

})

// ROUTE: api/user/auth/get/user
// DESCRIPTION: GET USER OBJECT (without password)
// ACCESS: PRIVATE
// TYPE: GET
router.get('/get/user', user_middlware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'});
    }
})




module.exports = router;