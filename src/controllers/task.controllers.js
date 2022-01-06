import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
  } catch (error) {
    console.error(error);
  }
};

export const rendertable = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("table", { tasks: tasks });
  } catch (error) {
    console.error(error);
  }
};

export const renderCreateTask = async (req, res) => {
  const task = Task(req.body);
  await task.save(); //Don't break
  res.redirect("/tasks");
};

export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (error) {
      console.error(error.message);
    }
  };

export const renderTaskUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndUpdate(id, req.body);
      res.redirect("/tasks");
    } catch (error) {
      console.error(error.message);
    }
  };

export const renderTaskDelete = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id, req.body);
    res.redirect("/tasks");
  };

export const renderTaskDone = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
  
      task.done = !task.done;
  
      await task.save();
      console.log(task);
    } catch (error) {
      console.error(error.message);
    }
  
    // res.send("Estado cambiado");
    res.redirect("/");
  };