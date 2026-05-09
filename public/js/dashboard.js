async function loadDashboard() {
  try {
    const doctors = await fetch("/api/doctors").then(r => r.json());
    const patients = await fetch("/api/patients").then(r => r.json());
    const appointments = await fetch("/api/appointments").then(r => r.json());

    console.log("Doctors:", doctors);
    console.log("Patients:", patients);
    console.log("Appointments:", appointments);

    document.getElementById("doctorCount").innerText = doctors.length;
    document.getElementById("patientCount").innerText = patients.length;
    document.getElementById("appointmentCount").innerText = appointments.length;

  } catch (error) {
    console.log("Dashboard error:", error);
  }
}

loadDashboard();