//controller
const express = require('express');
const router = express.Router();

//middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})
router.get('/', async (req, res)=>{
    try {
        let todolists = await getTodolists(req.query.search);
        res.send(todolists);
    }
    catch(error) {
        console.log(error)
        res.send(404);
    }
})
router.get('/:todolistId', async (req, res) => {
    try {
        const todolist = await getTodolist(req.params.todolistId)
        if (!!todolist) {
            res.send(todolist);
        } else {
            res.send(404);
        }
    }
    catch(error) {
        console.log(error);
        res.send(404);
    }
})
router.delete('/:todolistId', async (req, res) => {
    try {
        await deleteTodolist(req.params.todolistId);
        res.send(204);
    }
    catch(error) {
        console.log(error)
        res.send(404)
    }
})
router.post('/', async (req, res) => {
    try {
        await addTodolist(req.params.todolistName)
        res.send({success: true});
    }
    catch(error) {
        console.log(error)
        res.send(404)
    }
})
router.put('/', async (req, res) => {
    await updateTodolist(req.params.id, req.params.name);
    res.send({success: true});
})

module.exports = router;