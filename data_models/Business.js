const mongoose = require('mongoose');

const businessAccountSchema = new mongoose.Schema({
    //Oct 28 need to update these fields at the bottom so they are correct lol nerd - consider proper salting in future vid
    email:{
        type:String,
        required:true,
        minlength:7,
        maxlength:500
    },
    pass:{
        type:String,
        required:true,
        minlength:6,
        maxlength:500
    },
    companyName:{
        type:String,
        required:true,
        minlength:1,
        maxlength:70
    },
    address:{
        type:String,
        required:true,
        minlength:6,
        maxlength:50
    },
    postalCode:{
        type:String,
        required:true,
        minlength:4,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        minlength:10,
        maxlength:1000
    },
    active:{
        type:Boolean,
        required:true,
        default: false, //automatic
    },
    numberOfPeople:{
        type:Number,
        default: 0,
        required:true,
        min: 0, //automatic
    },
    maxNumberOfPeople:{
        type:Number,
        required:true,
        min:0,
    },
    verificationToken:{
        type:Number, //may or may not keep this depending on JWT tokens
        required:true,
        // min:5,
        // max:300
        max:999999 //automatic
    },
},
    {timestamps: true});

module.exports = mongoose.model("BusinessAccount", businessAccountSchema);

// emailAddress: email,
//             pass: saltedPass,
//             companyName: companyName,
//             address: address,
//             postalCode: postalCode,
//             maxNumberOfPeople: maxNumberOfPeople,
//             description: description,
//             active: false, //will be true when correct token is added 
//             numberOfPeople: 0,
//             verificationToken: secretToken, //be able to retrieve this and active, implement salting pass, test all methods
//             salt: secretSalt -this we will ignore for now
