//create a schema of  this project and connect it to the mongodb 

const  mongoose = require("mongoose");
//mongodb url handle
//mongodb+srv://ashusingh:Ashusingh%40123@cluster0.ejntlon.mongodb.net/

mongoose.connect("mongodb+srv://ashusingh:Ashusingh%40123@cluster0.ejntlon.mongodb.net/todos/todos.todo");
const  todoSchema = mongoose.Schema({
    title : String ,
    description : String ,
    completed : Boolean 
})

const  todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}