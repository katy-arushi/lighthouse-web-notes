var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const someTodos = {
    1: {
        id: 1,
        name: "Study React",
        description: "1 hour a day",
        isComplete: false
    },
    2: {
        id: 2,
        name: "water plants",
        description: "once a week",
        isComplete: true
    },
    3: {
        id: 3,
        name: "practice typing",
        description: "10 hours a week",
        isComplete: false
    }
}

app.get('/api/todos', (req, res) => {
 res.json(someTodos);
})

app.post("/api/todos", (req, res) => {
	const newTodo = req.body.todo;
    // console.log(newTodo)
	someTodos[newTodo.id] = newTodo;

	res.send("ok");
});

app.put("/api/todos/:todo_id", (req, res) => {
	someTodos[req.params.todo_id].isComplete = true;
	res.send("ok");
});

app.delete("/api/todos/:todo_id", (req, res) => {
	delete someTodos[req.params.todo_id];
	res.send("ok");
});


module.exports = app;
