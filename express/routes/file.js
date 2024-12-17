const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { verifyProfileToken, IsAdmin, IsClient } = require("../middleware/auth");
const fileController = require("../services/fileService");

// Настройка хранилища для multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Save Avatar Profile
router.patch(
  "/:userId/avatar",
  verifyProfileToken,
  IsClient,
  upload.single("img"),
  fileController.saveAvatar
);

// Download Avatar Profile
router.get(
  "/:userId/avatar/download",
  verifyProfileToken,
  IsAdmin,
  fileController.downloadAvatar
);

module.exports = router;
