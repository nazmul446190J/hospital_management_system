const db = require("../config/db");

const Doctor = {};

Doctor.getAll = (cb) => db.all("SELECT * FROM doctors", cb);

Doctor.create = (data, cb) =>
  db.run("INSERT INTO doctors(name,speciality) VALUES(?,?)",
  [data.name, data.speciality], cb);

Doctor.update = (id, data, cb) =>
  db.run("UPDATE doctors SET name=?, speciality=? WHERE id=?",
  [data.name, data.speciality, id], cb);

Doctor.delete = (id, cb) =>
  db.run("DELETE FROM doctors WHERE id=?", [id], cb);

module.exports = Doctor;