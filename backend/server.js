// backend/src/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config({
    path:'../.env'
})
const app = express();
app.use(cors());
app.use(express.json());


// Connect MongoDB
connectDB();


app.get('/', (req, res) => {
res.send('API is running ...');
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));