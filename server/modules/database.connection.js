const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/kitchen';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('mongoose connected on', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection failed', error);
});

module.exports = databaseUrl;