import User from "../models/userModel.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");

    res.status(200).json({ data: filteredUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
