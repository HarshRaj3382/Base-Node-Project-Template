const info=(req,res)=>{
    return res.status(500).json({
        sucess:true,
        message:'Api is LIVE',
        error:{},
        data:{}
    })
}

module.exports={
  info
}


