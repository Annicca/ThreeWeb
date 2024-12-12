const config = require("../config/config");
const jwt = require("jsonwebtoken");

exports.verifyProfileToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    token = token.split(" ")[1]; // Remove Bearer from string

    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");

    let verifiedProfile = jwt.verify(token, config.TOKEN_SECRET);
    if (!verifiedProfile) return res.status(401).send("Unauthorized request");

    req.profile = verifiedProfile;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
exports.IsClient = async (req, res, next) => {
  if (req.profile.role === "CLIENT") {
    next();
  }
  return res.status(403).send("Unauthorized!");
};
exports.IsAdmin = async (req, res, next) => {
  if (req.profile.role === "ADMIN") {
    next();
  }
  return res.status(403).send("Unauthorized!");
};
