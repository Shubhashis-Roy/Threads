import jwt from "jsonwebtoken";

function generateTokenAndSetCookie(userId, res) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // more secure
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    sameSite: "strict", // CSRF
  });

  return token;
}

export default generateTokenAndSetCookie;
