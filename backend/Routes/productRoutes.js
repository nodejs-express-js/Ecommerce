const express=require("express")
const productRoutes=express.Router();
const prodcutControllers=require("../Controllers/productController")
productRoutes.get("/",prodcutControllers.productGetController)
productRoutes.post("/",prodcutControllers.productPostController) 
productRoutes.put("/",prodcutControllers.productPutController) 
productRoutes.delete("/",prodcutControllers.productDeleteController) 

module.exports =productRoutes