//import the model

const Todo = require("../models/Todo");


//define the route handler

exports.createTodo = async (req, res) => {  //main thread ke block ni karunga and data base be data ache se jaye or code flow me dikkat na ho
    try {
        //extract title and description from request body
        const { title, description } = req.body;

        // create a new Todo obj and insert in DB
        const response = await Todo.create({ title, description });

        //send a json response with a success flag

        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry created Successfully'
            }
        )
    } catch (error) {


        console.error(error);
        console.log(error);

        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: error.message,
            }
        )

    }

}
