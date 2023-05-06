import mongoose, { Schema } from "mongoose"


export const UserSchema = new Schema ({
    name: String,
    password: String || Number,
    email: String
})







const UserModel = mongoose.model("users", UserSchema);

export default UserModel;