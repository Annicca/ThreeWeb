const config = require("../config/config");
const jwt = require("jsonwebtoken");

exports.verifyProfileToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    token = token.split(" ")[1];

    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");

    let verifiedProfile = jwt.verify(token, config.TOKEN_SECRET);
    if (!verifiedProfile) return res.status(401).send("Unauthorized request");

    req.profile = verifiedProfile;
    next();
  } catch (error) {
    return res.status(400);
  }
};
exports.IsClient = async (req, res, next) => {
  if (req.profile.role === "CLIENT") {
    next();
  } else {
    return res.status(403).send("Unauthorized!");
  }
};
exports.IsAdmin = async (req, res, next) => {
  if (req.profile.role === "ADMIN") {
    next();
  } else {
    return res.status(403).send("Unauthorized!");
  }
};
