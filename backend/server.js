const express=require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const sellerRouter=require("./Routes/SellerRoutes")
const productRoutes=require("./Routes/productRoutes")
const customerRoutes=require("./Routes/CustomerRoutes")
const customerNonLoginRoutes=require("./Routes/CustomerNonLoginRoutes")
const sellerMiddleware=require("./MiddleWare/SellerMiddleWare")
app.use(cors())
app.use(express.json())

app.use("/seller",sellerRouter)
app.use("/product",sellerMiddleware)
app.use("/product",productRoutes)

app.use("/nonlogin",customerNonLoginRoutes)
app.use("/customer",customerRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("server is listening on port " + process.env.PORT)
})