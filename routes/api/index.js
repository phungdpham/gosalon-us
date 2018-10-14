const router = require("express").Router();

const appointmentRoutes = require("./appointment-api-routes");

//Routes for groups, services, appointments
router.use("/appointments", appointmentRoutes);

module.exports = router;
