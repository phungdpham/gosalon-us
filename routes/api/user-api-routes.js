const router = require("express").Router();
const usersController = require("../../config/passport");

//Routes for appointments

// Matches with "/api/appointments"
router.route("/")
  .post(usersController.create);

// Matches with "/api/appointments/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;