const Todo = require('../models/Todo');

// @desc Get all the todods
// @route GET /api/v1/todos
// @access Public
exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add todo
// @route POST /api/v1/todos
// @access Public
exports.addTodo = async (req, res, next) => {
    try {
        const {title, completed} = req.body;
        const todo = await Todo.create(req.body);
        return res.status(201).json({
            success: true,
            data: todo
        })
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc update todo
// @route POST /api/v1/todos
// @access Public
exports.updateTodo = async (req, res, next) => {
    try {
        let todo = await Todo.findById(req.params.id);
        const updateTodo = await Todo.update({
            title: todo.title
        }, {
            $set: {
                completed: !todo.completed
            }
        })
        todo = await Todo.findById(req.params.id);
        return res.status(200).json({
            success: true,
            data: todo
        })
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc Delete todo
// @route DELETE /api/v1/todos/:id
// @access Public
exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) {
            return res.status(404).json({
                success: false,
                data: "No Todo found"
            })
        }
        await todo.remove();
        return res.status(200).json({
            status: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}