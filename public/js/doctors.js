const doctorForm = document.getElementById("doctorForm");
const doctorTable = document.getElementById("doctorTable");

async function loadDoctors() {
  const response = await fetch("/api/doctors");
  const doctors = await response.json();

  doctorTable.innerHTML = "";

  doctors.forEach((doctor) => {
    doctorTable.innerHTML += `
      <tr>
        <td>${doctor.id}</td>
        <td>${doctor.name}</td>
        <td>${doctor.speciality}</td>
        <td>${doctor.experience}</td>
        <td>
          <button
            class="action-btn delete-btn"
            onclick="deleteDoctor(${doctor.id})"
          >
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

loadDoctors();

doctorForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const doctor = {
    name: document.getElementById("name").value,
    speciality: document.getElementById("speciality").value,
    experience: document.getElementById("experience").value,
  };

  await fetch("/api/doctors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctor),
  });

  doctorForm.reset();

  loadDoctors();
});

async function deleteDoctor(id) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this doctor?"
  );

  if (!confirmDelete) return;

  await fetch(`/api/doctors/${id}`, {
    method: "DELETE",
  });

  loadDoctors();
}