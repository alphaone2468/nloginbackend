const express=require("express")
const cors=require("cors")
const body=require("body-parser")
const dotenv=require("dotenv")
require("./conn/db")
const app=express()
const datadb=require("./models/data")
app.use(express.json())
app.use(cors())

dotenv.config({
    path:"./config.env"
})


app.post("/setdata",async(req, resp)=> {
    console.log(req.body.name);

    const data = await datadb.find({name: req.body.name})
    console.log(data)
    const obj={
        name:req.body.name,
        data:[req.body.data]
    }
    if(data.length==0) {
        let newdata=new datadb(obj)
        newdata=await newdata.save();
        console.log(newdata);
    }
    else{
        console.log("update");
        var newarr;
        newarr=data[0].data;
        console.log(newarr);
        newarr.push(req.body.data);
        console.log(newarr);
        
        const up=await datadb.updateOne({name:req.body.name},{$set:{data:newarr}})
        console.log(up);
    }
    resp.send({"msg":"success"})
})

app.post("/getdata",async function(req, resp) {
    const data=await datadb.findOne({name:req.body.name})
    console.log(data);
    resp.send(data);
})


app.listen(5000)