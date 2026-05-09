const Doctor = require("../models/doctorModel");

exports.createDoctor = (req, res) => {
  Doctor.addDoctor(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ message: "Doctor Added Successfully" });
  });
};

exports.fetchDoctors = (req, res) => {
  Doctor.getDoctors((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(rows);
  });
};

exports.deleteDoctor = (req, res) => {
  Doctor.deleteDoctor(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ message: "Doctor Deleted" });
  });
};