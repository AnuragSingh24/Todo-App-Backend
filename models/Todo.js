

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 200,
        },
        createdAt: {
            type:Date,
            required: true,
            default: Date.now(),  // default value agar ni aya to

        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        }

    }
);
module.exports = mongoose.model("Todo", todoSchema);  //export syntax 