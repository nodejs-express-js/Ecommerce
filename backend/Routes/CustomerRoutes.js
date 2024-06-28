const express=require("express");
const customerRoutes=express.Router();
const customerController=require("../Controllers/CustomerController")
customerRoutes.post("/signup",customerController.customerSignUp)
customerRoutes.post("/login",customerController.customerLogin)

module.exports=customerRoutes