const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateOTP } = require('../utils/generateOTP');
const { sendOTP } = require('../utils/sendOTP');
const { sendResetEmail } = require('../utils/sendResetEmail');

const router = express.Router();

// 🔐 Signup
router.post('/register', async (req, res) => {
  let { email, password } = req.body;
  email = email.trim().toLowerCase();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const otpExpires = Date.now() + 5 * 60 * 1000;

    const newUser = new User({ email, password: hashedPassword, otp, otpExpires });
    await newUser.save();
    await sendOTP(email, otp);

    res.json({ msg: 'OTP sent to your email. Please verify to complete signup.' });
  } catch {
    res.status(500).json({ msg: 'Server error during signup' });
  }
});

// 🔐 Login
router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  email = email.trim().toLowerCase();

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(403).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;
    await user.save();
    await sendOTP(email, otp);

    res.json({ msg: 'OTP sent. Please verify to complete login.' });
  } catch (err) {
  console.error("❌ Login error:", err);
  res.status(500).json({ msg: 'Server error during login' });
}

});

// 🔐 OTP Verification
router.post('/verify-otp', async (req, res) => {
  let { email, otp } = req.body;
  email = (email || '').trim().toLowerCase();
  otp = (otp || '').toString().trim();

  console.log('🔐 Verifying OTP for:', email);
  console.log('📨 Received OTP:', JSON.stringify(otp));

  try {
    const user = await User.findOne({ email });
    const storedOtp = user?.otp ? user.otp.toString().trim() : null;
    const expiresAt = user?.otpExpires ? Number(user.otpExpires) : 0;

    console.log('👤 User found:', !!user);
    console.log('🧾 Stored OTP:', JSON.stringify(storedOtp));
    console.log('⏰ OTP expires at:', new Date(expiresAt));
    console.log('⏱ Current time:', new Date());

    const isExpired = expiresAt < Date.now();
    const isMatch = storedOtp === otp;

    if (!user || !isMatch || isExpired) {
      console.log('❌ Validation failed:', { isMatch, isExpired });
      return res.status(400).json({ msg: 'Invalid or expired OTP' });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('✅ OTP verified. Token issued.');
    res.json({ msg: 'OTP verified successfully', token });
  } catch (err) {
    console.error('❌ Server error during OTP verification:', err);
    res.status(500).json({ msg: 'Server error during OTP verification' });
  }
});

// 🔐 Forgot Password
const crypto = require('crypto');

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const cleanEmail = (email || '').trim().toLowerCase();

  try {
    const user = await User.findOne({ email: cleanEmail });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetExpires = Date.now() + 15 * 60 * 1000;

    user.resetToken = resetToken;
    user.resetExpires = resetExpires;
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;
    await sendResetEmail(cleanEmail, resetLink);

    console.log('📧 Reset link sent to:', cleanEmail);
    console.log('🔗 Link:', resetLink);
    res.json({ msg: 'Password reset link sent to your email' });
  } catch (err) {
    console.error('❌ Error sending reset link:', err);
    res.status(500).json({ msg: 'Server error while sending reset link' });
  }
});

// 🔐 Reset Password
router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ msg: 'Password reset successful. You can now log in.' });
  } catch {
    res.status(400).json({ msg: 'Invalid or expired token' });
  }
});

module.exports = router;
