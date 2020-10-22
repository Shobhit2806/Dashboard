const mongoose = require('mongoose');
const express = require('express');
const app = express()
const router = express.Router();
const {demo} = require('../models/demo')

router.get('/',async (req, res)=>{
    
    const data = await demo.find();
    res.send(data)
})

module.exports=router