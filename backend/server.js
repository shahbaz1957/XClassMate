
import app from './src/app.js';
import connectDB from './src/config/db.js';



// Connect MongoDB
connectDB();



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));