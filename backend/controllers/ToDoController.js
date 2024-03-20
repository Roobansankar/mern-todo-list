// const ToDoModel = require("../models/ToDoModel");

// module.exports.getToDo = async (req, res) => {
//   const toDo = await ToDoModel.find();
//   res.send(toDo);
// };

// module.exports.saveToDo = async (req, res) => {
//   const { text } = req.body;

//   ToDoModel.create(text).then((data) => {
//     console.log("Added Successfully...");
//     console.log(data);
//     res.send(data);
//   });

// //   res.send(toDo);
// };


const { model } = require("mongoose");
const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    res.send(toDo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  try {
    const newToDo = await ToDoModel.create({ text }); // Pass an object with the text property
    console.log("Added Successfully...");
    console.log(newToDo);
    res.status(201).send(newToDo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.updateToDo = async(req,res) => {
    const {_id,text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("updated successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo  = async(req,res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted  successfully..."))
    .catch((err) => console.log(err))
}