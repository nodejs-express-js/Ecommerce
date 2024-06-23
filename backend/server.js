const express=require("express")
const app=express()
require("dotenv").config()

const sellerRouter=require("./Routes/SellerRoutes")
app.use(express.json())
app.use("/seller",sellerRouter)
app.listen(process.env.PORT, ()=>{
    console.log("server is listening on port " + process.env.PORT)
})