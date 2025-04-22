const express = require("express");
const multer = require("multer");
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.get("/", getStudents);
router.post("/", upload.single("image"), addStudent);
router.put("/:id", upload.single("image"), updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;