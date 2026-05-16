const Doctor = require("../models/doctorModel");

// GET ALL
exports.getDoctors = (req, res) => {
  Doctor.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

// ADD
exports.addDoctor = (req, res) => {
  Doctor.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Doctor added" });
  });
};

// UPDATE
exports.updateDoctor = (req, res) => {
  Doctor.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Doctor updated" });
  });
};

// DELETE
exports.deleteDoctor = (req, res) => {
  Doctor.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Doctor deleted" });
  });
};