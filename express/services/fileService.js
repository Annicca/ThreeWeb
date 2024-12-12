const Profile = require("../models/profile.js");
const path = require("path");
const appRoot = require("app-root-path");

const rootPath = appRoot.path;

exports.saveAvatar = async (req, res) => {
  try {
    const userId = req.params.userId;
    const profile = await Profile.findById(userId);
    if (!profile) {
      res.status(404).send("Пользователь не найден");
    }
    const file = req.file;
    if (!file) {
      res.status(400).send("Файл не был загружен");
    }
    profile.img = file.filename;
    await profile.save();
    res.status(200).send("Аватар успешно сохранен");
  } catch (error) {
    res.status(500).send("Ошибка сервера");
  }
};

exports.downloadAvatar = async (req, res) => {
  const userId = req.params.userId;
  const profile = await Profile.findById(userId);

  const filePath = path.join(rootPath, "public", "img", profile.img);

  res.setHeader("Content-Disposition", `attachment; filename="${filePath}"`);
  res.sendFile(filePath);
};
