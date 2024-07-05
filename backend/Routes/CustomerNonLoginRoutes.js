const express=require("express")
const customerNonLoginRoutes = express.Router();
const customerController=require("../Controllers/CustomerNonLoginController")
customerNonLoginRoutes.get("/all/:pageNumber",customerController.getAllProducts)
customerNonLoginRoutes.get("/one/:id",customerController.getOneProduct)
customerNonLoginRoutes.get("/numberofpages",customerController.getNumberofPages)
module.exports=customerNonLoginRoutes