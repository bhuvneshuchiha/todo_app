const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo_db");

const todo = new mongoose.Schema({
  title: String,
  description: String,
  isCompleted: {
    type: Boolean,
    default: false
  }
})

const todos = mongoose.model("todos", todo)

module.exports = {
  todos
}
