import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();   // Load environment variables
connectDB();       // Connect MongoDB

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
