const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://vocab_playground:Vocab123@cluster1.txpwnvz.mongodb.net/vocab_playground';

const mongoDb = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Database is connected');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};
module.exports = mongoDb;