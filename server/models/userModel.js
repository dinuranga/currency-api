import mongoose from "../config/mongooseConfig.js";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String
});

const userModel = mongoose.model("users", userSchema);

export default userModel;