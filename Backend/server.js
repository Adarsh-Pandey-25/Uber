import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';
dotenv.config();

const server = http.createServer(app)
const port = process.env.PORT || 3000;
server.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})
