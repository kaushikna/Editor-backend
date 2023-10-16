const express = require('express');
const router = express.Router() ;
const userController = require('../controllers/userController');
const productController = require('../controllers/productController')

router.post('/login', userController.userAuth)
router.post('/signup', userController.signUp)
router.get('/allproudct', productController.listProduct)
router.post('/update-product',productController.updateProductById)
router.get('/prodctbyid', productController.getProductByID)
router.post('/create-product', productController.addProduct)
router.delete('/detele-product',productController.deleteProduct)
module.exports = router