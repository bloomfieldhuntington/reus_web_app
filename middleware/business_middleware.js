// MARK:- IMPORTS
const jwt = require('jsonwebtoken');
const config = require('../config/keys');

module.exports = function(req, res, next) {
    // Grab token 
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({msg: 'Access Denied! No token'});
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, config.BUSINESS_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({msg: 'Token not valid'});
        
    }
}