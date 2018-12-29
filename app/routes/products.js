const express = require('express');
const router = express.Router();


// Entry point for list products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Get request to product'
    });
});


// Entry point for get product by id
router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Get product by id',
        productId: req.params.productId
    });
});


// Entry point for add new product
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Post request to add new product'
    });
});

module.exports = router;