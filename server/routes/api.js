import express from 'express';

import productsController from '../controllers/products';

const router = express.Router();

router.get('/products', productsController.getList);
router.get('/products/:id', productsController.getOne);

export default router;
