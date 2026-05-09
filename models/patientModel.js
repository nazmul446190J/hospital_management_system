const db = require("../config/db");

const Patient = {};

Patient.addPatient = (patient, callback) => {

  const sql =
    "INSERT INTO patients(name, age, gender, phone) VALUES(?,?,?,?)";

  db.run(
    sql,
    [
      patient.name,
      patient.age,
      patient.gender,
      patient.phone
    ],
    function(err) {
      callback(err);
    }
  );

};

Patient.getPatients = (callback) => {

  db.all(
    "SELECT * FROM patients",
    [],
    function(err, rows) {
      callback(err, rows);
    }
  );

};

module.exports = Patient;