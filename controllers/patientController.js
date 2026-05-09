const Patient = require("../models/patientModel");

exports.createPatient = (req, res) => {

  Patient.addPatient(req.body, (err) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        error: err.message
      });
    }

    res.json({
      message: "Patient Added Successfully"
    });

  });

};

exports.fetchPatients = (req, res) => {

  Patient.getPatients((err, rows) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        error: err.message
      });
    }

    res.json(rows);

  });

};