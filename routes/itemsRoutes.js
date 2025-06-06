const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.getItems);
router.post('/items', itemsController.createItem);
router.delete('/items/:id', itemsController.deleteItem);
router.put('/items/:id', itemsController.updateItem);

module.exports = router;
