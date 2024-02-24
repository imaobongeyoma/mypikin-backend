const router = require("express").Router();
const multer = require("multer");
const providerController = require("../controllers/providerController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/profiles");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const uploadprofilepic = multer({ storage });

router.put("/:id",  uploadprofilepic.single("profile_image"),  providerController.editUser); //edit a single provider detail

router.route("/").get(providerController.userList); //get full providerlist

router
  .route("/:id")
  .get(providerController.selectUser) //get a provider detail
  .delete(providerController.deleteUser); //delete a single provider detail

router.route("/:id/daycare").get(providerController.userDaycares); //get all daycare details for single provider

module.exports = router;
