import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15), // 15 days
    secure: process.env.NODE_ENV === "production", // true for production, false otherwise
    sameSite: "strict", // 'strict' or 'lax'
  });
  return token;
};

export default generateTokenAndSetCookie;
