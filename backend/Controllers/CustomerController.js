const db=require("../models/index")
const validator = require("validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const createToken=(id)=>{
    const token=jwt.sign({id},process.env.JSON_SECRET_KEY,{expiresIn:'3d'})
    return token;
}


const validateSignup=async(firstName,lastName,email,password)=>{
    if(!firstName ||!lastName ||!email ||!password){
        throw new Error("Please enter all the fields")
    }
    if(!validator.isEmail(email)){
        throw new Error("Please enter a valid email")
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Password should be strong")
    }
    const customer=await db.customer.findOne({where:{email}});
    if(customer){
        throw new Error("Email already in use")
    }
    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    return hashPassword;
}
const customerSignUp=async(req,res)=>{
    try{
        try{
            console.log(req.body)
            const { firstName,lastName,email,password}=req.body;
            const hashpassword=await validateSignup(firstName,lastName,email,password)
            const customer=await db.customer.create({firstName,lastName,email,password:hashpassword})
            const token=createToken(customer.dataValues.id)
            res.status(200).json({email,token})
        }
        catch(err){
            res.status(400).json({message:err.message});
        }
    }
    catch(err){
        res.status(500).json({message:"something went wrong with the request"})
    }
}



const customerLogin=async(req,res)=>{
    try{
        try{
            const {email,password}=req.body;
            if(!email || !password) {
                throw new Error("Please enter your email and password")
            }
            const customer=await db.customer.findOne({where:{email:email}})
            if(!customer){
                throw new Error("please signup email does not exist")
            }
            const passwordMatch=await bcrypt.compare(password,customer.dataValues.password)
            if(!passwordMatch){
                throw new Error("wrong password")
            }
            const token=createToken(customer.dataValues.id)
            res.status(200).json({email,token})
        }
        catch(err){
            res.status(400).json({message:err.message});
        }
    }
    catch(err){
        res.status(500).json({message:"something went wrong with server"})
    }
}

module.exports={customerSignUp,customerLogin}