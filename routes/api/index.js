const router = require("express").Router();

const appointmentRoutes = require("./appointment-api-routes");
const userRoutes = require("./users");

//Routes for groups, services, appointments
router.use("/appointments", appointmentRoutes);

// router.use('/users', userRoutes);


module.exports = router;
