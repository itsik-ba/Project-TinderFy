import mongoose, { Schema } from "mongoose"
import {profileSchema} from "../profileUser/profileModel";
import {prefferanceSchema} from "../prefferanceUser/prefferanceModel";


export const UserSchema = new Schema ({
    name: String,
    password: String || Number,
    email: String,
    profile:[profileSchema],
    preffrences:[prefferanceSchema]
})


const UserModel = mongoose.model("users", UserSchema);

export default UserModel;