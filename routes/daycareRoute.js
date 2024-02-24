const router = require("express").Router();
const daycareController = require("../controllers/daycareController")
const multer = require('multer');
const edit = multer();

const daycarephotos = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, "./public/daycares")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
const picupload = multer({storage: daycarephotos})

router
    .route("/")
    .get( daycareController.daycaresList)
router.post('/createdaycare', picupload.array('daycare_photos'), daycareController.createDaycare);

    router
    .route("/:id")
    .get( daycareController.singleDaycare)
    .put(edit.none(), daycareController.editDaycare)
    .delete(daycareController.deleteDaycare)

    router
    .route("/:id/info")
    .get(daycareController.singleDaycareInfo)
   
    module.exports = router;