const db = require("../config/db");

const Patient = {};

// GET ALL PATIENTS
Patient.getAll = (cb) => {
  db.all("SELECT * FROM patients", cb);  // ✅ MUST INCLUDE phone
};

// ADD PATIENT (FIXED ORDER)
Patient.create = (data, cb) => {
  db.run(
    "INSERT INTO patients(name, age, gender, phone) VALUES (?, ?, ?, ?)",
    [
      data.name,
      data.age,
      data.gender,
      data.phone
    ],
    cb
  );
};
// UPDATE PATIENT
Patient.update = (id, data, cb) => {
  db.run(
    "UPDATE patients SET name=?, age=?, gender=?, phone=? WHERE id=?",
    [
      data.name,
      data.age,
      data.gender,
      data.phone,
      id
    ],
    cb
  );
};

// DELETE PATIENT
Patient.delete = (id, cb) => {
  db.run("DELETE FROM patients WHERE id=?", [id], cb);
};

module.exports = Patient;