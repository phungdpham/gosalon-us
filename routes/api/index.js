const router = require("express").Router();

const appointmentRoutes = require("./appointment-api-routes");
const authRoutes = require("./auth");

//Routes for groups, services, appointments
router.use("/appointments", appointmentRoutes);
// router.use("/login", auth);

router.use('/user', authRoutes);


module.exports = router;
