async function loadDoctors() {
  let res = await fetch("/api/doctors");
  let data = await res.json();

  let doctorSelect = document.getElementById("doctorSelect");
  doctorSelect.innerHTML = `<option value="">Select Doctor</option>`;

  data.forEach(d => {
    doctorSelect.innerHTML += `
      <option value="${d.id}">
        ${d.name} (${d.speciality})
      </option>`;
  });
}

async function loadPatients() {
  let res = await fetch("/api/patients");
  let data = await res.json();

  let patientSelect = document.getElementById("patientSelect");
  patientSelect.innerHTML = `<option value="">Select Patient</option>`;

  data.forEach(p => {
    patientSelect.innerHTML += `
      <option value="${p.id}">
        ${p.name} (${p.phone})
      </option>`;
  });
}

async function loadAppointments() {
  let res = await fetch("/api/appointments");
  let data = await res.json();

  let table = document.getElementById("appointmentTable");
  table.innerHTML = "";

  data.forEach(a => {
    table.innerHTML += `
      <tr>
        <td>${a.id}</td>
        <td>${a.patient_name}</td>
        <td>${a.patient_phone}</td>
        <td>${a.doctor_name}</td>
        <td>${a.speciality}</td>
        <td>${a.appointment_date}</td>
        <td>
          <button onclick="deleteAppointment(${a.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

async function addAppointment() {
  await fetch("/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      patient_id: patientSelect.value,
      doctor_id: doctorSelect.value,
      appointment_date: appointmentDate.value
    })
  });

  loadAppointments();
}

async function deleteAppointment(id) {
  await fetch(`/api/appointments/${id}`, {
    method: "DELETE"
  });

  loadAppointments();
}

// INIT
loadDoctors();
loadPatients();
loadAppointments();