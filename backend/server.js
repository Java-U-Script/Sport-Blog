const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("API is running...");
});


const Port = process.env.Port || 5000;

app.listen(Port,()=>{
    console.log(`server sunning in port ${Port}`);
});