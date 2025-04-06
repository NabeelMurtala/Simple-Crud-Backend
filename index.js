import express from 'express'
import mongoose from 'mongoose';
import Product from './models/product.model.js';   
import router from './routes/product.route.js';
const app = express()

//middleware
app.use(express.json()) // Middleware to parse JSON request body
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded request body

// Routes
app.use('/api/products', router);


app.get('/', (req,res) => {
    res.send("Hello From Node Api Server");
});


mongoose.connect("mongodb+srv://nabeelmurtalas:OhxmXn6Oxe8tor83@backenddb.spgridj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(3000, () =>{
        console.log('server is running on port 3000');
    });
})
.catch((err) => {
    console.log('MongoDB connection failed', err);
});  


