const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const foodRouter = require('./routes/food.router');

const databaseUrl = require('./modules/database.connection');

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/food', foodRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});