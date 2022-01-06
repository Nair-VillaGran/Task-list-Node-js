import { Router } from "express";
import Task from "../models/Task";
import {
  renderTasks,
  renderCreateTask,
  renderTaskEdit,
  renderTaskUpdate,
  renderTaskDelete,
  renderTaskDone,
  rendertable,
} from "../controllers/task.controllers";
const router = Router();

//receving data from Task
router.get("/", renderTasks);

router.get('/tasks',rendertable);

//Update
router.post("/edit/:id", renderTaskUpdate);

//delete
router.get("/delete/:id", renderTaskDelete);

//ToogleDone
router.get("/toogleDone/:id", renderTaskDone);

//receving data from tasktable (database)
router.post("/tasks/add", renderCreateTask);

//Sending data to edit
router.get("/edit/:id", renderTaskEdit);

export default router;
