import express from 'express';  // Import express properly
import cors from 'cors';        // Import CORS middleware
// import user from './models/User.js';
import loginRouter from './routes/auth.js';
import connectToDatabase from './db/db.js'
import registerRouter from './routes/register.js'; 
const app = express();          // Create an instance of express
app.use(cors());                // Use CORS middleware
app.use(express.json());        // Use middleware to parse JSON requests
connectToDatabase();
app.use('/api/auth',loginRouter)
app.use('/api/add',registerRouter)
const PORT = 3000;              

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
