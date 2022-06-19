import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

const app = express();
dotenv.config();

connectDB();

app.get('/',(req,res)=>{
    res.send('Api is Running')
})

app.use('/api/products',productRoutes);


app.use()

app.use()

const PORT = process.env.PORT || 5000
app.listen(
    PORT, 
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    .yellow.bold)
    )