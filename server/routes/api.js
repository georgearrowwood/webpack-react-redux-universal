import express from 'express';

import productsController from '../controllers/products';

const router = express.Router();

router.get('/products', productsController.getList);
router.post('/products', productsController.addOne);
router.delete('/products/:id', productsController.delete);

export default router;
