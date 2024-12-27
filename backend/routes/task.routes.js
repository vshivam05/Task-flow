const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task.controller");
const upload = require("../config/multerConfig");

router.get("/", taskController.getTask);
router.post("/", upload.single("pdf"), taskController.createTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;