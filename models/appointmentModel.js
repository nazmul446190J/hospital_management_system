const db = require("../config/db");

const Appointment = {

  bookAppointment: function (data, cb) {

    db.run(
      `
      INSERT INTO appointments
      (
        patient_id,
        doctor_id,
        appointment_date,
        status
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        data.patient_id,
        data.doctor_id,
        data.appointment_date,
        "Pending"
      ],
      cb
    );

  },

  getAppointments: function (cb) {

    db.all(
      `
      SELECT
        appointments.id,
        patients.name AS patient_name,
        doctors.name AS doctor_name,
        doctors.speciality,
        appointments.appointment_date,
        appointments.status

      FROM appointments

      JOIN patients
        ON appointments.patient_id = patients.id

      JOIN doctors
        ON appointments.doctor_id = doctors.id
      `,
      [],
      cb
    );

  }

};

module.exports = Appointment;