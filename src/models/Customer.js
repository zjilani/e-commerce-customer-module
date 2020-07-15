const mongoose = require("mongoose")
const validator =  require('validator')
const jwt = require('jsonwebtoken');
require('../app.js')

const customerSchema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        min : 1000000000,
        max : 9999999999,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email  Not Valid")
            }
        }
    },
    password:{
        type:String,
        required: true,
        trim:true,
        validate(value){
            if(((value.toLowerCase()).includes('password')) && value.length>6){
                throw new Error("password can't be included in Password field or length is too short")
            }

        }
    },
    otpVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
        default: ""
    },
    markForDelete:{
        type:Boolean,
        default:false
    },
    tokens:[{
        token:{
            type:String
            // required: true,
        }
    }]
})

customerSchema.methods.generateAuthToken = async function() {
    const customer = this;
    console.log(customer.customerId)
    const token = jwt.sign({customerId:customer.customerId}, "myecommerceproject");
  
    customer.tokens = customer.tokens.concat({ token });
    console.log(customer.tokens)
    await customer.save();
  
    return token;
};
//   const tokens = async function() {
//     // const customer = this;
//     // console.log(customerId)
//     const token = jwt.sign('Customer_2', "myecommerceproject");
//     console.log(token)
  
//   }
// tokens()

module.exports = mongoose.model("Customer",customerSchema)