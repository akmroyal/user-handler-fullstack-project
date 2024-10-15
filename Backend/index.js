const express = require("express")
const dotenv = require('dotenv')
// for the enviroment var's 
dotenv.config()
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const userRoute = require('./router/userRoute.router.js')
const cors = require('cors') // helps to send data from frontend
app.use(cors())


const DB_NAME = "simpleDataBaseFetchPractice" // this is my mongodb Official Data base name

mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
    console.log("MongoDB connected successfully :)");
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}/api/user`);
    })
}).catch((err) => {
    console.log("MONGO db connection failed !! :(", err);
})

app.use('/api/user', userRoute)