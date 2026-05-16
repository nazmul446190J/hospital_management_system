const Patient = require("../models/patientModel");

// GET
exports.getPatients = (req, res) => {

  Patient.getAll((err, rows) => {

    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    console.log("DATA FROM DB:", rows); // DEBUG

    res.json(rows);
  });

};

// ADD

exports.addPatient = (req, res) => {

  console.log("REQ BODY:", req.body);

  Patient.create(req.body, (err) => {

    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json(err);
    }

    res.json({ message: "Patient added successfully" });
  });
};
// UPDATE (MUST EXIST)
exports.updatePatient = (req, res) => {
  Patient.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Updated" });
  });
};

// DELETE
exports.deletePatient = (req, res) => {
  Patient.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted" });
  });
};