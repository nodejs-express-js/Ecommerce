const db=require("../models/index");
const validator=require("validator")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
require("dotenv").config()
const createToken=(id,email)=>{
const token=jwt.sign({id,email},process.env.JSON_SECRET_KEY,{expiresIn:'3d'})
    return token;
}
const sellerSignupHelper = async(firstName,lastName,email,password)=>{
    if(!firstName || !lastName || !email || !password){
        throw new Error("Please enter your first name and last name  and email and password")
    }
    if(!validator.isAlphanumeric(firstName)){
        throw new Error("first name must be alphanumeric")
    }
    if(!validator.isAlphanumeric(lastName)){
        throw new Error("last name must be alphanumeric")
    }
    if(!validator.isEmail(email)){
        throw new Error("email must be valid")
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("password must have one lower,upper,symbol,number and minimum length of 8")
    }
    const seller=await db.Seller.findOne({where:{email:email}})
    if(seller){
        throw new Error("email already exist")
    }
    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)
    return hashPassword;
}
const sellerSignup=async(req,res)=>{
try{
   let {firstName,lastName,email,password}=req.body;
   let hashPassword=await sellerSignupHelper(firstName,lastName,email,password)

   const seller = await db.Seller.create({
     firstName:firstName, lastName:lastName
    , email:email, password:hashPassword
    });
    const token=createToken(seller.dataValues.id,seller.dataValues.email)
    res.status(200).json({email,token})
}
catch(err){
    res.status(400).json({message:err.message});
}
}










const sellerLogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password) {
            throw new Error("Please enter your email and password")
        }       
        const seller=await db.Seller.findOne({where:{email:email}})
        if(!seller){
            throw new Error("email does not exist")
        }
        const isMatch=await bcrypt.compare(password,seller.dataValues.password)
        if(!isMatch){
            throw new Error("password does not match")
        }
        const token=createToken(seller.dataValues.id,seller.dataValues.email)
        res.status(200).json({email,token})
     }
     catch(err){
         res.status(400).json({message:err.message});
     }
}

module.exports={
    sellerSignup,
    sellerLogin
}
