async function loadDoctors() {
  let res = await fetch("/api/doctors");
  let data = await res.json();

  let table = document.getElementById("doctorTable");
  table.innerHTML = "";

  data.forEach(d => {
    table.innerHTML += `
      <tr>
        <td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.speciality}</td>
        <td>
          <button onclick="deleteDoctor(${d.id})">Delete</button>
        </td>
      </tr>`;
  });
}

async function addDoctor() {
  await fetch("/api/doctors", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      name: doctorName.value,
      speciality: doctorSpeciality.value
    })
  });

  loadDoctors();
}

async function deleteDoctor(id) {
  await fetch(`/api/doctors/${id}`, { method: "DELETE" });
  loadDoctors();
}

loadDoctors();