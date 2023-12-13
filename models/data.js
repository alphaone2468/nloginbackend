const mongoose = require('mongoose')

const sch=new mongoose.Schema({
    name:String,
    data:Array
})

const model=mongoose.model("data",sch)

module.exports = model