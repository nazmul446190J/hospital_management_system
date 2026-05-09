const express = require("express");

const router = express.Router();

const patientController =
  require("../controllers/patientController");

router.post(
  "/",
  patientController.createPatient
);

router.get(
  "/",
  patientController.fetchPatients
);

module.exports = router;