import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
import { mongodbConnection } from './Config/mongodb.config.js';
import { productRouter } from './routers/product.routers.js';
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

// testing route
app.get('/', (req, res) => {
    res.send('server is running fine');
})

//Product Middleware 
app.use('/api/products', productRouter)
app.listen(port, () => {
    console.log(`server is running on this port: http://localhost:${port}/api`);
});

mongodbConnection();