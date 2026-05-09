const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");

router.post("/", doctorController.createDoctor);
router.get("/", doctorController.fetchDoctors);
router.delete("/:id", doctorController.deleteDoctor);

module.exports = router;