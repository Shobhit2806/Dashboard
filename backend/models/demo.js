const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');


const demoSchema = new mongoose.Schema({
    date:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    },
    time:{
        type: String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
    }
    
})


const demo = mongoose.model('demo',demoSchema);


function validatedemo(demo){
    const schema=Joi.object({
        date:Joi.string().required(),
        time:Joi.string().required(),
    })
    return schema.validate(demo);
}



exports.demo = demo;
exports.validatedemo = validatedemo;
