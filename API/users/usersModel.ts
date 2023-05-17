import mongoose, { Schema } from "mongoose"



export const UserSchema = new Schema ({
    name: {require:[true, "user must enter"], type:String, unique:true}, 
    password: {require:true, type:String},
    email: {require:true, type:String, unique:true},
    role: {type:String, enum:["subscriber", "user"],default:"user"},
    subscribed:{type:Boolean, default:false, select:false}
   })


const UserModel = mongoose.model("users", UserSchema);



export default UserModel; 