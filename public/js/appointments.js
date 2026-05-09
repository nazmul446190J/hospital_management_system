const appointmentForm =
  document.getElementById("appointmentForm");

const appointmentTable =
  document.getElementById("appointmentTable");

const patientSelect =
  document.getElementById("patientSelect");

const doctorSelect =
  document.getElementById("doctorSelect");

async function loadPatients() {
  const response = await fetch("/api/patients");

  const patients = await response.json();

  patientSelect.innerHTML =
    `<option value="">Select Patient</option>`;

  patients.forEach((patient) => {
    patientSelect.innerHTML += `
      <option value="${patient.id}">
        ${patient.name}
      </option>
    `;
  });
}

async function loadDoctors() {
  const response = await fetch("/api/doctors");

  const doctors = await response.json();

  doctorSelect.innerHTML =
    `<option value="">Select Doctor</option>`;

  doctors.forEach((doctor) => {
    doctorSelect.innerHTML += `
      <option value="${doctor.id}">
        Dr. ${doctor.name} - ${doctor.speciality}
      </option>
    `;
  });
}

async function loadAppointments() {
  const response =
    await fetch("/api/appointments");

  const appointments =
    await response.json();

  appointmentTable.innerHTML = "";

  appointments.forEach((appointment) => {
    appointmentTable.innerHTML += `
      <tr>
        <td>${appointment.id}</td>
        <td>${appointment.patient_name}</td>
        <td>${appointment.doctor_name}</td>
        <td>${appointment.speciality}</td>
        <td>${appointment.appointment_date}</td>
        <td>${appointment.status}</td>
      </tr>
    `;
  });
}

loadPatients();
loadDoctors();
loadAppointments();

appointmentForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const appointment = {
      patient_id: patientSelect.value,
      doctor_id: doctorSelect.value,
      appointment_date:
        document.getElementById(
          "appointmentDate"
        ).value,
    };

    await fetch("/api/appointments", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(appointment),
    });

    appointmentForm.reset();

    loadAppointments();
  }
);