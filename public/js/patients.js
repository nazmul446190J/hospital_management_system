const patientForm = document.getElementById("patientForm");
const patientTable = document.getElementById("patientTable");

async function loadPatients() {
  const response = await fetch("/api/patients");
  const patients = await response.json();

  patientTable.innerHTML = "";

  patients.forEach((patient) => {
    patientTable.innerHTML += `
      <tr>
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.gender}</td>
        <td>${patient.phone}</td>
      </tr>
    `;
  });
}

loadPatients();

patientForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const patient = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
  };

  await fetch("/api/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient),
  });

  patientForm.reset();

  loadPatients();
});