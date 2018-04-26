const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.get('/food', (req, res) => {
    console.log('GET: /food');
    res.send({name: 'pasta', deliciousness_rating: 9, is_hot: true});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});