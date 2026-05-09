const bcrypt = require("bcryptjs");
const db = require("./config/db");

async function seedAdmin() {
  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  db.run(
    "INSERT INTO admins(username,password) VALUES(?,?)",
    ["admin", hashedPassword],
    (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Admin Created");
      }
    }
  );
}

seedAdmin();