const db=require("../models/index");
const productGetController=async(req,res)=>{
    try{
        const product=await db.Seller.findOne(
            {where:{id:req.seller.id},
            include:[{
                model:db.Product
            }]
        }    
        )        
        res.status(200).json(product.Products)
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}

const productPostController=async(req,res)=>{
    try{
        const {productName,productImage,price,quantity }=req.body;
        if(!productName || !productImage){
            throw new Error("please enter all the fields")
        }
        if(price==undefined || quantity==undefined || price==null || quantity==null){
            throw new Error("please enter all the fields")
        }
      
        const seller=await db.Seller.findOne({where:{id:req.seller.id}});
        if(!seller){
            throw new Error("seller does not exist")
        }
        
        const existingproduct=await db.Product.findOne({where:{productName}})
        if(existingproduct){
            throw new Error("product already exist in store use another product Name")
        }
        const product=await db.Product.create({
            productName,productImage,price,quantity, sellerId:seller.dataValues.id
        })
        res.status(200).json(product)
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}


const productPutController=async(req,res)=>{
    try{
        let {productName,productImage,price,quantity,id}=req.body;
        if(!id){
            throw new Error("please provide a valid id")
        }
        const product=await db.Product.findOne({where:{id:id, sellerId:req.seller.id}})
        if(!product){
            throw new Error("product does not exist")
        }
        if(!productName){
            productName=product.dataValues.productName
        }
        if(!productImage){
            productImage=product.dataValues.productImage
        }
        
        if(price==undefined || price==null){
            price=product.dataValues.price
        }
        if(quantity==undefined || quantity==null){
            quantity=product.dataValues.quantity
        }
        const updatedproduct=await db.Product.update({
            productName,productImage,price,quantity},
            {where:{id:id,sellerId:req.seller.id}}
        )
        res.status(200).json({message:"product updated successfully"})
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
}
const productDeleteController=async(req,res)=>{
    try{
        const {id}=req.body
        if(!id){
            throw new Error("please provide a valid id")
        }
        const product=await db.Product.destroy({where:{id:id,sellerId:req.seller.id}})
        res.status(200).json({message:"deleted the product successfully"})
    }
    catch(e){
        res.status(200).json({message:e.message})
    }
}
module.exports={productGetController, productPostController, productPutController, productDeleteController}