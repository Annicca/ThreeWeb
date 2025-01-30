const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Profile = require("../models/profile.js");

exports.register = async (req, res) => {
  try {
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);

    // Create an user object
    let profile = new Profile({
      login: req.body.login,
      password: hasPassword,
      role: "CLIENT",
    });

    // Save User in the database
    const registeredUser = await profile.save();

    let payload = {
      id: registeredUser._id,
      login: registeredUser.login,
      role: registeredUser.role,
      img: registeredUser.img,
    };
    const token = jwt.sign(payload, config.TOKEN_SECRET);

    return res.status(200).send({ user: payload, token });
  } catch (err) {
    return res.status(401);
  }
};

exports.login = async (req, res) => {
  try {
    const profile = await Profile.findOne({ login: req.body.login });

    if (!profile) {
      return res.status(401);
    }
    const validPass = await bcrypt.compare(req.body.password, profile.password);

    if (!validPass) {
      return res.status(401);
    }

    // Create and assign token
    const payload = {
      id: profile._id,
      login: profile.login,
      role: profile.role,
      img: profile.img,
    };
    const token = jwt.sign(payload, config.TOKEN_SECRET);

    return res
      .status(200)
      .header("auth-token", token)
      .send({ user: payload, token });
  } catch (err) {
    return res.status(500);
  }
};
