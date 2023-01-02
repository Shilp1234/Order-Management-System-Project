const express=require("express")
const route=require("./routes/route")
const app=express();
const mongoose=require("mongoose")

app.use(express.json())

mongoose.connect("mongodb+srv://sk:<15_07_2001shilpi>@cluster0.erg1lu1.mongodb.net/ordermanagementsystem",
   { useNewUrlParser:true}
)
.then(()=>console.log("MongoDb is Connected Successfully"))
.catch(err=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 5000, function (){
    console.log("Express App is Running on Port"+ (process.env.PORT || 5000))
})




