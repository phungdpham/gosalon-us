const router = require("express").Router();

const appointmentRoutes = require("./appointment-api-routes");
const userRoutes = require("./user-api-routes");

//Routes for groups, services, appointments
router.use("/appointments", appointmentRoutes);
router.use("/login", userRoutes);


module.exports = router;
