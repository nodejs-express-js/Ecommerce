

const customerSignUp=async(req,res)=>{
    try{
        res.status(200).json({message:"hello worled"})
    }
    catch(err){
        res.status(400).json({message:"something went wrong"})
    }
}

const customerLogin=async(req,res)=>{
    try{
        res.status(200).json({message:"hello worled login"})
    }
    catch(err){
        res.status(400).json({message:"something went wrong"})
    }
}

module.exports={customerSignUp,customerLogin}