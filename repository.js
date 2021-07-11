// Model
const mongoose = require('mongoose');
const { addUser } = require('../../nodejs-study/back-end-node/repository');

const todolistScheme = new mongoose.Scheme({
    name: String,
});
const Todolist = mongoose.model('Todolist', todolistScheme);

const getTodolists = (search) => {
    if(!!search) {
        return Todolist.find({name: new RegExp(search)})
    } else {
        return Todolist.find()
    }
}
const getTodolist = (todolistId) => {
    return Todolist.find({_id: todolistId})
}
const deleteTodolist = (todolistId) => {
    return Todolist.deleteOne({_id: id});
}
const updateTodolist = (todolistId, todolistName) => {
    return Todolist.findOneAndUpdate([{_id: todolistId}, {name: todolistName}]);
}
const addTodolist = async (todolistName) => {
    let todolist = new Todolist({name: todolistName});
    return todolist.save()
}

exports.deleteTodolist = deleteTodolist;
exports.getTodolists = getTodolist;
exports.getTodolist = getTodolist;
exports.addTodolist = addTodolist;
exports.updateTodolist = updateTodolist