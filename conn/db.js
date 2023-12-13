const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config({
    path:"./config.env"
})
let link=process.env.DATABASE
mongoose.connect(link).then((msg)=>{
    console.log("Successfully Connected");
}).catch((error)=>{
    console.log("Error During Connecting To DataBase")
})
