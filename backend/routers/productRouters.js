import express from 'express';
import {
     getProducts,
     getProductByid 
    } from '../controllers/productController.js';
const router = express.Router()


router.route('/').get(getProducts)
router.route('/:id').get(getProductByid)

export default router; 