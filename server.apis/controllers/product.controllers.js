import { Product } from "../models/product.model.js";
import { catchErrorMessage } from "../helpers/catchMessage.js";


export const getProduct = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            ok: true,
            message: products.length > 0 ? 'Products found successfully' : 'NO Product Found in database',
            count: products.length,
            products: products
        });
    } catch (error) {
        catchErrorMessage(res, error, 500);
    }
}


export const addProduct = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) throw new Error('Please fill all required fields');

        let { title, price, stock, batch, expiry } = req.body;

        if (!title?.trim() || !batch?.trim() || !expiry?.trim()) throw new Error('Please enter valid Title, Batch, and Expiry details');

        if (price === undefined || price === null || String(price).trim() === '') throw new Error('please Enter Vaild Price');
        price = Number(price);
        if (isNaN(price) || price < 0) throw new Error('Price Should a Number and greater than zero');

        if (stock === undefined || stock === null || String(stock).trim() === '') throw new Error('Please Enter Vaild Stock');
        stock = Number(stock);
        if (isNaN(stock) || stock < 0) throw new Error(`Stock should be a number and greater than zero`);

        const newProduct = await Product.create({
            title,
            price,
            stock,
            batch,
            expiry
        });
        if (!newProduct) throw new Error('Product not saved in database');

        res.status(201).json({
            ok: true,
            message: 'Product Successfully saved in database',
            products: newProduct
        });
    } catch (error) {
        catchErrorMessage(res, error, 400);
    }
}


export const getSingleProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) throw new Error('Product Id not found');

        const product = await Product.findById(productId);
        if (!product) throw new Error('Product Not Found in database');

        res.status(200).json({
            ok: true,
            message: 'Single Product found',
            products: product
        });
    } catch (error) {
        catchErrorMessage(res, error, 400);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) throw new Error('Product Id not found');

        if (Object.keys(req.body).length === 0) throw new Error('please Change one field to update product');

        const keys = ['title', 'batch', 'expiry'];
        for (const key of keys) {
            if (req.body[key] !== undefined && req.body[key] !== null) {
                const value = req.body[key];
                if (value.trim() === '') throw new Error(`Please Enter vaild data in this field: ${key}`);
            }
        }

        if (req.body.price !== undefined && req.body.price !== null) {
            const price = Number(req.body.price);
            if (isNaN(price) || price < 0) throw new Error('Please Enter Vaild Price');
            req.body.price = price;
        }

        if (req.body.stock !== undefined && req.body.stock !== null) {
            const stock = Number(req.body.stock);
            if (isNaN(stock) || stock < 0) throw new Error('Please Enter Vaild Stock');
            req.body.stock = stock;
        }


        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )


        if(!updatedProduct) throw new Error('Please Enter Valid Product Id');

        res.status(200).json({
            ok: true,
            message: 'Product Update successfully',
            products: updatedProduct
        })
    } catch (error) {
        catchErrorMessage(res, error, 400);
    }
}


export const deleteProduct = async (req, res) => {
    try{    
        const productId = req.params.id;
        if (!productId) throw new Error('Product Id not found');

        const deletedProduct = await Product.findByIdAndDelete(productId);
        if(!deletedProduct) throw new Error('Please Enter vaild Id');

        res.status(200).json({
            ok: true,
            message: 'Product Delete successfully',
            products: deletedProduct
        })
    } catch(error){
        catchErrorMessage(res, error, 400);
    }
}