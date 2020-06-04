const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        mobile:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        image:{
            type:Buffer,
            required:false,
        },
        registrationType:{
            type:String,
            require:true,
        },
        noOfTickets:{
            type:Number,
            required:true,
        },
        registrationId:{
            type:String,
            required:false,
        },
        registrationDate:{
            type:Date,
            default:Date.now
        }
})

module.exports = mongoose.model('User',userSchema);