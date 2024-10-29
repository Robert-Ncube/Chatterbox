import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/genToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password!" });
    }

    const token = generateTokenAndSetCookie(user._id, res);

    res.json({
      message: "User logged in sucessfully.",
      data: {
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmPassword, gender } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    const Username = await User.findOne({ username });
    if (Username) {
      return res.status(400).json({ error: "Username already exists!" });
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Generate unique profile pic using username
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();
    const token = generateTokenAndSetCookie(newUser._id, res);
    res.status(201).json({
      message: "User registered successfully!",
      data: {
        user: {
          id: newUser._id,
          fullname: newUser.fullname,
          username: newUser.username,
          email: newUser.email,
          gender: newUser.gender,
          profilePic: newUser.profilePic,
          token,
        },
      },
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    res.json({ message: "User logged out successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
