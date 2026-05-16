async function loadPatients() {

  let res = await fetch("/api/patients");
  let data = await res.json();

  let table = document.getElementById("patientTable");
  table.innerHTML = "";

  data.forEach(p => {

    table.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td>${p.phone ? p.phone : "N/A"}</td>  <!-- FIX -->
        <td>
          <button onclick="deletePatient(${p.id})">Delete</button>
        </td>
      </tr>
    `;
  });

}

// ADD PATIENT (MAIN FIX HERE)
async function addPatient() {

  const payload = {
    name: document.getElementById("patientName").value,
    age: document.getElementById("patientAge").value,
    gender: document.getElementById("patientGender").value,
    phone: document.getElementById("patientPhone").value
  };

  console.log("SENDING:", payload);

  const res = await fetch("/api/patients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log("SERVER RESPONSE:", data);

  loadPatients();
}

// DELETE
async function deletePatient(id) {

  await fetch(`/api/patients/${id}`, {
    method: "DELETE"
  });

  loadPatients();
}

loadPatients();