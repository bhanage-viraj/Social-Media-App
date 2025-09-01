import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
dotenv.config();   // Load environment variables
connectDB();       // Connect MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON
const PORT = process.env.PORT || 8000;
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
