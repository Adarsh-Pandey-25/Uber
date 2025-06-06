import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './DB/db.js';
import userRoutes from './routes/user.routes.js';


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/v1/users', userRoutes);

export default app;
