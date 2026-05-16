const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./hospital.db");

// DOCTORS
db.run(`
CREATE TABLE IF NOT EXISTS doctors (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
speciality TEXT
)`);

// PATIENTS (with phone)
db.run(`
CREATE TABLE IF NOT EXISTS patients (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
age INTEGER,
gender TEXT,
phone TEXT
)`);

// APPOINTMENTS
db.run(`
CREATE TABLE IF NOT EXISTS appointments (
id INTEGER PRIMARY KEY AUTOINCREMENT,
patient_id INTEGER,
doctor_id INTEGER,
appointment_date TEXT,
status TEXT DEFAULT 'Pending'
)`);

module.exports = db;