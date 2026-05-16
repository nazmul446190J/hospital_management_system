async function loadDashboard() {

  let d = await (await fetch("/api/doctors")).json();
  let p = await (await fetch("/api/patients")).json();
  let a = await (await fetch("/api/appointments")).json();

  document.getElementById("totalDoctors").innerText = d.length;
  document.getElementById("totalPatients").innerText = p.length;
  document.getElementById("totalAppointments").innerText = a.length;

}

loadDashboard();