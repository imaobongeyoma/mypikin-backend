const router = require("express").Router();
const multer = require('multer');
const authController = require("../controllers/authController");
const express = require("express");
const app = express();
app.use("/", express.static("./public/profiles/"))
app.use("/", express.static("./public/daycares/"))


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./public/profiles")
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
const upload = multer({storage})
router.post('/register', upload.single('file'), authController.register);

router.route("/login").post(authController.login)
router.route("/logout").post(authController.logout)

    module.exports = router;