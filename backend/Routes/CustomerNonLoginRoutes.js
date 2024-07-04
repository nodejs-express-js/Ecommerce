const express=require("express")
const customerNonLoginRoutes = express.Router();
const customerController=require("../Controllers/CustomerNonLoginController")
customerNonLoginRoutes.get("/all",customerController.getAllProducts)
customerNonLoginRoutes.get("/one",customerController.getOneProduct)
customerNonLoginRoutes.get("/numberofpages",customerController.getNumberofPages)
module.exports=customerNonLoginRoutes