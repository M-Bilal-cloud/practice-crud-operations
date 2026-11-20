import express from 'express';
import * as prod from '../controllers/product.controllers.js';

export const productRouter = express.Router();

productRouter.route('/')
                    .get(prod.getProduct)
                    .post(prod.addProduct);
productRouter.route('/:id')
                    .get(prod.getSingleProduct)
                    .patch(prod.updateProduct)
                    .delete(prod.deleteProduct);