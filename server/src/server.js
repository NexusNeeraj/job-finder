import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

// load environment variables
dotenv.config();
connectDB();
const port = process.env.PORT || 5000;


// start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});