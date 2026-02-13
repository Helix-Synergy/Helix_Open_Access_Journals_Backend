const express=require("express");
const app=express();
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config();
const JournalsRouter=require("./router/journalsrouter")
const ConnectionDB=require("./config/db")
ConnectionDB()
// routes
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use("/form",JournalsRouter)
// Server
app.listen(process.env.PORT,()=>{console.log("The server is running")})