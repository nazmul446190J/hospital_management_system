const router = require("express").Router();
const controller = require("../controllers/patientController");

// MUST MATCH controller names EXACTLY
router.get("/", controller.getPatients);

router.post("/", controller.addPatient);

router.put("/:id", controller.updatePatient);   // ✅ FIXED

router.delete("/:id", controller.deletePatient);

module.exports = router;