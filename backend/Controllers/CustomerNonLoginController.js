const db=require("../models/index")
require("dotenv").config()
const pageSize=process.env.PAGE_SIZE

const getAllProducts=async(req,res)=>{
try{
    const {pageNumber}=req.params;
    console.log(pageNumber)
    if(!pageNumber){
        throw new Error("Please provide a page number")
    }
const products=await db.Product.findAll({
    offset:(pageNumber-1)*pageSize,
    limit:pageSize,
    order:[['views','DESC']]
})
res.status(200).json(products)
}
catch(err){
    try{
        if(err.message){
            res.status(400).json({message:err.message})
            return;
        }
    }
    catch(err){
        res.status(500).json({message:"something went wrong with the request"})
    }
}
}
const getNumberofPages=async(req,res)=>{
    try{
        const products=await db.Product.count({distinct: true })
        console.log(products)
        const numberOfPages=Math.ceil(products/pageSize)
        res.status(200).json({numberOfPages})
    }
    catch(err){
        try{
            if(err.message){
                res.status(400).json({message:err.message})
                return;
            }
        }
        catch(err){
            res.status(500).json({message:"something went wrong with the request"})
        }
    }
}
const getOneProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        if(!id){
            throw new Error("Please provide a product id")
        }
        const product=await db.Product.findAll({where:{id:id}})
        if(!product){
            throw new Error("product not found")
        }
        product[0].increment('views')
        res.status(200).json(product)
    }
    catch(err){
        try{
            if(err.message){
                res.status(400).json({message:err.message})
                return;
            }
        }
        catch(err){
            res.status(500).json({message:"something went wrong with the request"})
        }
    }
}

module.exports={getAllProducts,getOneProduct,getNumberofPages}