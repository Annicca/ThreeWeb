const Profile = require("../models/profile.js");
const path = require("path");
const appRoot = require("app-root-path");

const rootPath = appRoot.path;

const allowedExtensions = [".png", ".jpg", ".jpeg", ".webp"];

exports.saveAvatar = async (req, res) => {
  try {
    const userId = req.params.userId;

    const profile = await Profile.findById(userId);
    if (!profile) {
      return res.status(404).send("Пользователь не найден");
    }
    const file = req.file;

    if (!file) {
      return res.status(404).send("Файл не был загружен");
    }
    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      return res
        .status(404)
        .send("Неверный формат файла, загрузите другой файл");
    }
    profile.img = file.filename;

    await profile.save();

    return res.status(200).send("");
  } catch (error) {
    return res.status(500).send("");
  }
};

exports.downloadAvatar = async (req, res) => {
  const userId = req.params.userId;
  const profile = await Profile.findById(userId);

  const filePath = path.join(rootPath, "public", "img", profile.img);

  res.setHeader("Content-Disposition", `attachment; filename="${filePath}"`);
  return res.sendFile(filePath);
};
