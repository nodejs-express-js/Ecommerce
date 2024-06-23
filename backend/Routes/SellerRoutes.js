const express=require("express")
const sellerRouter=express.Router();
const sellerController=require("../Controllers/SellerController")

sellerRouter.post("/signup",sellerController.sellerSignup)
sellerRouter.post("/login" ,sellerController.sellerLogin)

module.exports=sellerRouter