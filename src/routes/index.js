const express=require('express');

const router=express.Router();

const v1Routes=require('./v1');

router.use('/v1',v1Routes);  //if v1 is there after api then it goes to v1


module.exports=router;