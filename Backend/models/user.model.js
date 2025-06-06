import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema= new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,"Minimum 3 characters required"]
        },
        lastName:{
            type:String,
            minlength:[3,"Minimum 3 characters required"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/]
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select: false
    },
    socketId:{
        type:String
    }
})

userSchema.methods.generateAuthToken= function(){
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(this.password,req.body.password);
}

userSchema.statics.hashPassword= async function(password){
    return await bcrypt.hash(password, 10)
}

const userModel= mongoose.model("User",userSchema);

export default userModel; //exporting the model