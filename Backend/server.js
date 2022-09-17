require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/user');
const app = express()


app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.use('/user',userRoute);

app.listen(3000,()=>{
    console.log("server listening on port 4000");
})

