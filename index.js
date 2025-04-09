const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.get("/", (req, res)=> {
    res.status(203).json({
        message: "Basic backend"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running on the ${PORT}`)
})