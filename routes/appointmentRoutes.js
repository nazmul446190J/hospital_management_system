const router = require("express").Router();
const controller = require("../controllers/appointmentController");

// GET (JOIN patient + doctor)
router.get("/", controller.getAppointments);

// ADD appointment
router.post("/", controller.addAppointment);

// UPDATE appointment
router.put("/:id", controller.updateAppointment);

// DELETE appointment
router.delete("/:id", controller.deleteAppointment);

module.exports = router;