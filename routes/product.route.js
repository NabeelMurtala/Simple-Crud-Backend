const express = require('express');
const Product = require('../models/product.model.js'); // Adjust the path as necessary
const router = express.Router();
const {getproducts,getproduct,createproduct,updateproduct,deleteproduct} = require('../controller/product.controller.js');

router.get('/',getproducts);

router.get('/:id', getproduct);

router.post('/', createproduct);

router.put('/:id', updateproduct);

router.delete('/:id', deleteproduct);


module.exports = router;