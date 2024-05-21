const express = require("express");
const app = express();

//load config from env file

require("dotenv").config();

const PORT = process.env.PORT || 4000;  //agar ni aya to 4000 port pe run karega server


//middle ware to parse json request

app.use(express.json());



//import routes for TODO api


const todoRoutes = require("./routes/todos");

//mount the todo api routes 
app.use("/api/v1" , todoRoutes);


//start server 

app.listen(PORT, ()=>
{
  console.log(`Server started at ${PORT}`);
})

//connect to the databae

const dbconnect = require("./config/database");
dbconnect();

//default route 

app.get("/", (req,res) =>{
  res.send(`<h1>This is the homepage</h1>`);
})