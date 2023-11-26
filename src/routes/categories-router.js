const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category-controller");

// Create
router.post('/', categoryController.categoryCreate);

// Read
router.get('/', categoryController.categoriesList);
router.get('/:id', categoryController.categoryDetail);

// Update
router.put('/:id', categoryController.categoryUpdate);

// Delete
router.delete('/:id', categoryController.categoryDelete);

module.exports = router;