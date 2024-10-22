const express = require("express");
const router = express.Router();
const Task = require("../model/model")

router.post('/postTask' , async (req , res) => {
  try {
    const { taskTitle , description } = req.body;

    const newTask = new Task ({
      taskTitle,
      description,
      status : "pending"
    })

    await newTask.save();
    res.status(201).json(newTask)
  }
  catch(error){
    res.status(500).json({ error : "failed to create task"})
  }
})


router.get('/tasks' , async (req , res) => {
  try{
    const tasks = await Task.find();
    res.status(200).json(tasks)
  }
  catch(error){
    res.status(500).json({ error : "failed to fetch tasks"})
  }
})

router.get('/:id' , async ( req , res) => {
  try {
      const id = req.params.id;
      const task = await Task.findById(id);

      if(!task){
        return res.status(400).json({error : "task not foudn"})
      }
      res.status(201).json(task)  
  }
  catch(error){
    res.status(500).json({ error : " failed to get task"})
  }
}) 


router.delete('/:id' , async ( req , res) => {
  try{
    const id = req.params.id;
    const task = await Task.findById(id);
    
    if(!task){
      return res.status(400).json({ error : " task not found"})
    }
    else{
      await task.deleteOne()
      res.status(200).json({ success : " successfully deleted task"})
    }
  
  }
  catch(error){
    res.status(500).json({ error : "failed to delete task"})
  }
})


router.put('/:id' , async(req , res) => {
  try {
    const id = req.params.id;
    const { taskTitle , description , status} = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id , { taskTitle , description , status } , {new : true})


    if(!updatedTask) {
      return res.status(404).json({error : " task not foudn"})
    }

    res.status(200).json(updatedTask)
  }
  catch(error){
      res.status(500).json({ error : "failed to update task "})
  }
})


router.get('/tasks', async (req, res) => {
  try {
    console.log("Query parameters:", req.query);

    // Extract the priority from the query parameters
    const { priority } = req.query;

    // Initialize an empty filter
    let filter = {};

    // If priority is provided in the query, add it to the filter
    if (priority) {
      filter.priority = priority;
    }

    // Fetch tasks based on the filter
    const tasks = await Task.find(filter);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});


module.exports = router;



module.exports =  router ;