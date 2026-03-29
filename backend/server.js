const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./route/authroute');
const updateRoutes = require('./route/updateroute');
const cors = require('cors');
const app = express();

app.use(cors());

dotenv.config();
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/auth', authRoutes);
app.use('/', updateRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to home page"})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});