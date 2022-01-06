"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rendertable = exports.renderTasks = exports.renderTaskUpdate = exports.renderTaskEdit = exports.renderTaskDone = exports.renderTaskDelete = exports.renderCreateTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var renderTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].find().lean();

          case 3:
            tasks = _context.sent;
            res.render("index", {
              tasks: tasks
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function renderTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderTasks = renderTasks;

var rendertable = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Task["default"].find().lean();

          case 3:
            tasks = _context2.sent;
            res.render("table", {
              tasks: tasks
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function rendertable(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.rendertable = rendertable;

var renderCreateTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            task = (0, _Task["default"])(req.body);
            _context3.next = 3;
            return task.save();

          case 3:
            //Don't break
            res.redirect("/tasks");

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function renderCreateTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderCreateTask = renderCreateTask;

var renderTaskEdit = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Task["default"].findById(req.params.id).lean();

          case 3:
            task = _context4.sent;
            res.render("edit", {
              task: task
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0.message);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function renderTaskEdit(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.renderTaskEdit = renderTaskEdit;

var renderTaskUpdate = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Task["default"].findByIdAndUpdate(id, req.body);

          case 4:
            res.redirect("/tasks");
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0.message);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function renderTaskUpdate(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.renderTaskUpdate = renderTaskUpdate;

var renderTaskDelete = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Task["default"].findByIdAndDelete(id, req.body);

          case 3:
            res.redirect("/tasks");

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function renderTaskDelete(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.renderTaskDelete = renderTaskDelete;

var renderTaskDone = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _Task["default"].findById(id);

          case 4:
            task = _context7.sent;
            task.done = !task.done;
            _context7.next = 8;
            return task.save();

          case 8:
            console.log(task);
            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0.message);

          case 14:
            // res.send("Estado cambiado");
            res.redirect("/");

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 11]]);
  }));

  return function renderTaskDone(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.renderTaskDone = renderTaskDone;