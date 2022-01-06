"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Task = _interopRequireDefault(require("../models/Task"));

var _task = require("../controllers/task.controllers");

var router = (0, _express.Router)(); //receving data from Task

router.get("/", _task.renderTasks);
router.get('/tasks', _task.rendertable); //Update

router.post("/edit/:id", _task.renderTaskUpdate); //delete

router.get("/delete/:id", _task.renderTaskDelete); //ToogleDone

router.get("/toogleDone/:id", _task.renderTaskDone); //receving data from tasktable (database)

router.post("/tasks/add", _task.renderCreateTask); //Sending data to edit

router.get("/edit/:id", _task.renderTaskEdit);
var _default = router;
exports["default"] = _default;