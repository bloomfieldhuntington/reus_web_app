// **** RE:US SERVER ****
// **** Smidig 2020 ****

// MARK:- IMPORTS
const express = require('express');
const connect_db = require('./config/database');
// const path = require('path');

// Initlialize express application
const app = express();
// Connect to database
connect_db();

// MARK:- MIDDLEWARE
app.use(express.json({ extended: false }));

// MARK:- ROUTES

// User
app.use('/api/user/auth', require('./api/user/user_auth'));
app.use('/api/user/actions', require('./api/actions/user_actions'));
// Business
app.use('/api/business/auth', require('./api/user/business_auth'));
app.use('/api/business/actions', require('./api/actions/business_actions'));
// Admin
// app.use('/api/admin/auth', require('./api/user/admin_auth'));
// app.use('/api/admin/actions', require('./api/actions/admin_actions'));
// Item
app.use('/api/item', require('./api/item/item'));

// MARK:- PORT & ACCESS
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server live on port: ${PORT}`));
