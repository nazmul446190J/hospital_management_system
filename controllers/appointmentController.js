const Appointment = require("../models/appointmentModel");

// GET ALL (JOIN patient + doctor)
exports.getAppointments = (req, res) => {
  Appointment.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

// ADD APPOINTMENT
exports.addAppointment = (req, res) => {
  Appointment.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Appointment booked" });
  });
};

// UPDATE APPOINTMENT
exports.updateAppointment = (req, res) => {
  Appointment.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Appointment updated" });
  });
};

// DELETE APPOINTMENT
exports.deleteAppointment = (req, res) => {
  Appointment.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Appointment deleted" });
  });
};