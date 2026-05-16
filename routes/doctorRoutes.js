const router = require("express").Router();
const controller = require("../controllers/doctorController");

// GET
router.get("/", controller.getDoctors);

// ADD
router.post("/", controller.addDoctor);

// UPDATE
router.put("/:id", controller.updateDoctor);

// DELETE
router.delete("/:id", controller.deleteDoctor);

module.exports = router;