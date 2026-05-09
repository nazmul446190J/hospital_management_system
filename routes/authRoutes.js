const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const db = require("../config/db");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM admins WHERE username=?",
    [username],
    async (err, admin) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      if (!admin) {
        return res.status(401).json({
          message: "Invalid Username",
        });
      }

      const validPassword = await bcrypt.compare(
        password,
        admin.password
      );

      if (!validPassword) {
        return res.status(401).json({
          message: "Invalid Password",
        });
      }

      req.session.admin = admin.id;

      res.json({
        message: "Login Successful",
      });
    }
  );
});

router.get("/logout", (req, res) => {
  req.session.destroy();

  res.redirect("/login.html");
});

module.exports = router;