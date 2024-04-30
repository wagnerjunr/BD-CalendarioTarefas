const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose.connect(mongoURI);


app.get("/", (req, res) => {
    res.send("Express App is Runnig")

})

const Task = mongoose.model("Task", {
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    }
})

app.get('/alltasks', async (req, res) => {
    let tasks = await Task.find({});
    res.send(tasks)
})

app.post('/addtask', async (req, res) => {
    let tasks = await Task.find({});
    let id;
    if (tasks.length > 0) {
        let last_task_array = tasks.slice(-1);
        let last_task = last_task_array[0];
        id = last_task.id + 1;
    } else {
        id = 1;
    }
    const task = new Task({
        id: id,
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });
    await task.save();
    console.log("Task Salva");
    res.json({
        success: true
    })
})

app.post('/deletetask', async (req, res) => {
    await Task.findOneAndDelete({ id: req.body.id })
    console.log("Tarefa Apagada")
    res.json({
        success: true
    })
})

app.post('/updatetask', async (req, res) => {
    const taskId = req.query.id;
    if (!taskId) {
        return res.status(400).json({ success: false, message: "ID da tarefa não fornecido" });
    }
    try {
        const updateTask = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        };
        await Task.findOneAndUpdate({ id: taskId }, updateTask);
        console.log("Task atualizada");
        res.json({
            success: true
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro ao buscar tarefa" });
    }

})

app.get('/task', async (req, res) => {
    const taskId = req.query.id;
    if (!taskId) {
        return res.status(400).json({ success: false, message: "ID da tarefa não fornecido" });
    }
    try {
        const task = await Task.findOne({ id: taskId });
        if (!task) {
            return res.status(404).json({ success: false, message: "Tarefa não encontrada" });
        }
        res.send(task);
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro ao buscar tarefa" });
    }
});


app.listen(PORT, (error) => {
    if (error) {
        console(error)
    } else {
        console.log("Server rodando na porta 4000");
    }
})