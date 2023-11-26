const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

// Create
router.post('/', productController.productCreate);

// Read
router.get('/', productController.productsList);
router.get('/:id', productController.productDetail);

// Update
router.put('/:id', productController.productUpdate);

// Delete
router.delete('/:id', productController.productDelete);

module.exports = router;