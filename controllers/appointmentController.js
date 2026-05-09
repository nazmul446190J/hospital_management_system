const Appointment = require("../models/appointmentModel");

exports.createAppointment = (req, res) => {

  Appointment.bookAppointment(
    req.body,
    (err) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          error: err.message
        });
      }

      res.json({
        message:
          "Appointment Booked Successfully"
      });

    }
  );

};

exports.fetchAppointments = (req, res) => {

  Appointment.getAppointments(
    (err, rows) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          error: err.message
        });
      }

      res.json(rows);

    }
  );

};