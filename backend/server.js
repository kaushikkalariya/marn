import express from 'express';
import cors from 'cors';
import dotenv from'dotenv';
import bodyParser from'body-parser';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import products from './data/products.js';
import productRoutes from './routers/productRouters.js'
import userRoutes from './routers/userRoutes.js'
import orderRoutes from './routers/orderRoutes.js'


dotenv.config()

connectDB(); 
const app = express();
//app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

// app.use((req, res, next) => {

// })

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('API is running')
})


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


app.use(notFound)
app.use(errorHandler)

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(p=>p._id === req.params.id);
//     res.json(product)
// })


const PORT = process.env.PORT || 5555
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} port ${process.env.PORT}`));