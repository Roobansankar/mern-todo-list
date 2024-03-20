const {Router} = require("express");
// const { getToDo, saveToDo } = require("../controllers/ToDoController");
const ToDoModel = require("../models/ToDoModel");
const { getToDo, saveToDo ,updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

// router.get('/', (req,res)=> {
//     res.json({message: "Hii there I am from router file "})
// })

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)






module.exports = router;














// router.get('/', async (req,res) => {
//         var findData = await ToDoModel.find();
//         res.json(findData)
// })


// router.post('/post', async(req,res)=> {
//      console.log(req.body);
//            var data = new ToDoModel({
//              text : req.body.text
//            })
//            await data.save();
//            res.json(data);
// })


// router.post('/update', async(req,res) => {
//      const {_id,text} = req.body
//      ToDoModel
//      .findByIdAndUpdate(_id, {text})
//      .then(() => res.send("updated successfully..."))
//      .catch((err) => console.log(err))
// })


// router.post('/delete', async(req,res) => {
//     const {_id} = req.body
//     ToDoModel
//     .findByIdAndDelete(_id)
//     .then(() => res.send("Deleted  successfully..."))
//     .catch((err) => console.log(err))
// })