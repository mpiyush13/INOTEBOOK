const mongoose=require('mongoose')
console.log("piyush")
const mongoURI = "mongodb://127.0.0.1:27017/piyushm"

const connectToMomgo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Hey Piyush You got Connected to Mongose")
    })
}
module.exports=connectToMomgo;