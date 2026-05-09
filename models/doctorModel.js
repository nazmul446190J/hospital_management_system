const db = require("../config/db");

exports.addDoctor = (doctor, callback) => {
  db.run(
    "INSERT INTO doctors(name, speciality, experience) VALUES(?,?,?)",
    [doctor.name, doctor.speciality, doctor.experience],
    callback
  );
};

exports.getDoctors = (callback) => {
  db.all("SELECT * FROM doctors", [], callback);
};

exports.deleteDoctor = (id, callback) => {
  db.run("DELETE FROM doctors WHERE id=?", [id], callback);
};