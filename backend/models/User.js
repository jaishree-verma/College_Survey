// this stores user information, including email, password, OTP for verification, and verification status.
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
password: { type: String, required: true },
otp: String,
otpExpires: Date,
isVerified: { type: Boolean, default: false }

});

module.exports = mongoose.model("User", UserSchema);
