const express = require('express');
const router = express.Router();
const Product = require('../models/Product.model');

// Route to get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new product
router.post('/', async (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        price: req.body.price
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get one product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// Middleware function to get product object by ID
async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.product = product;
    next();
}

// Route to update a product
router.patch('/:id', getProduct, async (req, res) => {
    if (req.body.title != null) {
        res.product.title = req.body.title;
    }
    if (req.body.description != null) {
        res.product.description = req.body.description;
    }
    if (req.body.img != null) {
        res.product.img = req.body.img;
    }
    if (req.body.price != null) {
        res.product.price = req.body.price;
    }
    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a product
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

