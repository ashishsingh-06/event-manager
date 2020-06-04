const express = require('express');
const router = express.Router();

exports.admin_login = (req,res,next)=>{

    const username = 'Admin';
    const password = 'admin123';

    if(username==req.body.username)
    {
        if(password==req.body.password)
        {
            res.status(200).json({
                message:'Welcome'
            });
        }
        else
        {
            res.status(200).json({
                message:'Username and Password do not match'
            });
        }
    }
    else
    {
        res.status(200).json({
            message:'Wrong Username or Password'
        })
    }

    
}