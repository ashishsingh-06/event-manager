const express = require('express');
const router = express.Router();
const User = require('../models/user');


exports.create_user = (req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    var registrationId = req.body.firstName + '_' + Math.floor(100000 + Math.random() * 900000);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile:req.body.mobile,
        email:req.body.email,
        image:req.body.image,
        registrationType:req.body.registrationType,
        noOfTickets:req.body.noOfTickets,
        registrationId:registrationId,
    });

    user.save().then((result)=>{
        res.status(201).json({
            message:'User Registered Successfully',
            userDetails:{
                registrationId:result.registrationId,
                name:req.body.firstName,
            }
        });
    }).catch((err)=>{

        res.status(500).json({
            error:err
        });
    })
}

exports.get_users = (req,res,next)=>{

    User.find().then((docs)=>{

        if(docs.length>0)
        {
            res.status(200).json({
                status:200,
                data: docs,
            });
        }
        else
        {
            res.status(404).json({
                message: 'No Users Found'
            })
        }
    }).catch((err)=>{

        res.status(500).json({
            error:err
        });
    })
}

