import mongoose, { Schema } from "mongoose"



export const UserSchema = new Schema ({
    name: {require:true, type:String, unique:true}, 
    password: {require:true, type:String || Number, unique:true},
    email: {require:true, type:String, unique:true},
   })


const UserModel = mongoose.model("users", UserSchema);



export default UserModel; 