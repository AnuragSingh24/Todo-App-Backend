const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    // Fetch all the todo items from the database
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo data is fetched"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message
    });
  }
}

exports.getTodoById = async (req, res) => { // Corrected the order of parameters
  try {
    // Extract todo items through id
    const id = req.params.id;
    const todo = await Todo.findById({_id :id});

    // Data is not found for given id
    if (!todo) { // Corrected the typo here
      return res.status(404).json({
        success: false,
        message: "No data found with the given Id"
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo data is fetched"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false, // Corrected the typo here
      data: "Internal server error",
      message: err.message
    });
  }
}
