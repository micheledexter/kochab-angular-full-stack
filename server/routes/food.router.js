const express = require('express');
const router = express.Router();
const Food = require('../models/food.schema');

// When we want to get our foods
router.get('/', (req, res) => {
    console.log('GET: /food');
    Food.find({})
        .then((databaseResults) => {
            // good things happened!
            res.send(databaseResults);
        })
        .catch((error) => {
            console.log('error make food find', error);
            res.sendStatus(500);
        })
});

// When we want to add a new food. 
router.post('/', (req, res) => {
    const foodToAdd = req.body; // body.name
    console.log('Food to add:', foodToAdd);
    Food.create(foodToAdd)
        .then(() => {
            // good things happened!
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error make food create', error);
            res.sendStatus(500);
        });
});

// When we want to update a food
router.put('/', (req, res) => {
    const foodToUpdate = req.body;
    console.log('Food to update:', foodToUpdate);
    Food.update({ _id: foodToUpdate._id }, foodToUpdate)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error make food update', error);
            res.sendStatus(500);
        });
});

// When we want to delete a food
router.delete('/:id', (req, res) => {
    const foodToDelete = req.params.id;
    console.log('Food to delete (id):', foodToDelete);
    Food.remove({_id: foodToDelete})
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error make food delete', error);
        res.sendStatus(500);
    });
});



module.exports = router;