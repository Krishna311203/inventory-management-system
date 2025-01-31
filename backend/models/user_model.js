import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    shopName: { type: String }
});

export default mongoose.model.Users || mongoose.model('User', UserSchema, 'main-data');