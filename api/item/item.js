const express = require('express');
const { check, validationResult } = require('express-validator');
// Middleware
const admin_middlware = require('../../middleware/admin_middleware');
const business_middlware = require('../../middleware/business_middleware');
const user_middlware = require('../../middleware/user_middleware');
// Models
const Item = require('../../models/Item');

const router = express.Router();

// MARK:- BUSINESS

// ROUTE: api/item/
// DESCRIPTION: CREATE ITEM
// ACCESS: PRIVATE
// TYPE: POST

module.exports = router;