require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app =  express()
const router = require('./src/router/router.js') 
const PORT = process.env.PORT


app.use(cors());
app.use(bodyParser.json());

app.use('/api',router)

app.listen(PORT,()=>{
    console.log("server lisiting on PORT:",PORT);
})