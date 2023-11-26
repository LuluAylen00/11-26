const express = require("express");
const router = express.Router();

const brandController = require("../controllers/brand-controller");

// Create
router.post('/', brandController.brandCreate);

// Read
router.get('/', brandController.brandsList);
router.get('/:id', brandController.brandDetail);

// Update
router.put('/:id', brandController.brandUpdate);

// Delete
router.delete('/:id', brandController.brandDelete);

module.exports = router;