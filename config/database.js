// REUS DATABASE

// MARK:- IMPORTS
const mongoose = require('mongoose');
const config = require('./keys');
const db = config.MONGODB_URI;

// MARK:- CONNECT TO DB
const connect_db = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected...');
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connect_db;