const jwt=require("jsonwebtoken");
require("dotenv").config()
const sellerMiddleware=async(req,res,next)=>{
    try{
        
        
        let seller;
        try{
            const authheader=req.headers.authorization;
            if(!authheader){
                throw Error("please provide a valid token");
            }
            const token=authheader.split(" ")[1];
            seller=jwt.verify(token,process.env.JSON_SECRET_KEY);

        }
        catch(err){
            if (err.name === 'TokenExpiredError') {
                throw Error("session has expired please login again");
            }
            throw Error("please provide a valid token");
        }
        req.seller=seller;
        next();
    }
    catch(err)
    {
        res.status(400).json({message:err.message});
    }
}
module.exports=sellerMiddleware