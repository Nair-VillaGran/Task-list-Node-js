"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trin: true
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    "default": false
  },
  important: {
    type: String,
    requered: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("task", taskSchema);

exports["default"] = _default;