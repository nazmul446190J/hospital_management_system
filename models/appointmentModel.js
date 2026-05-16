const db = require("../config/db");

const Appointment = {};

Appointment.getAll = (cb) => {
  db.all(`
    SELECT a.id,
           p.name AS patient_name,
           p.phone AS patient_phone,
           d.name AS doctor_name,
           d.speciality,
           a.appointment_date,
           a.status
    FROM appointments a
    LEFT JOIN patients p ON a.patient_id = p.id
    LEFT JOIN doctors d ON a.doctor_id = d.id
  `, cb);
};

Appointment.create = (data, cb) =>
  db.run(
    "INSERT INTO appointments(patient_id,doctor_id,appointment_date,status) VALUES(?,?,?,'Pending')",
    [data.patient_id, data.doctor_id, data.appointment_date],
    cb
  );

Appointment.update = (id, data, cb) =>
  db.run(
    "UPDATE appointments SET patient_id=?, doctor_id=?, appointment_date=?, status=? WHERE id=?",
    [data.patient_id, data.doctor_id, data.appointment_date, data.status, id],
    cb
  );

Appointment.delete = (id, cb) =>
  db.run("DELETE FROM appointments WHERE id=?", [id], cb);

module.exports = Appointment;