const mongoose = require("mongoose");
const connectDB = require("./db");
const Task = require("./model/model")


const mockTasks = [
  {
    taskTitle: "Complete the project report",
    description: "Finish the final report for the project by the end of the week.",
    status: "pending",
    priority: "high",
    dueDate: new Date('2024-10-25')
  },
  {
    taskTitle: "Prepare for the presentation",
    description: "Create slides and practice for the upcoming presentation.",
    status: "pending",
    priority: "medium",
    dueDate: new Date('2024-10-22')
  },
  {
    taskTitle: "Grocery shopping",
    description: "Buy vegetables, fruits, and snacks for the week.",
    status: "completed",
    priority: "low",
    dueDate: new Date('2024-10-20')
  },
  {
    taskTitle: "Read a book",
    description: "Finish reading the book 'The Alchemist'.",
    status: "pending",
    priority: "medium",
    dueDate: new Date('2024-11-01')
  },
  {
    taskTitle: "Workout",
    description: "Complete the workout session at the gym.",
    status: "completed",
    priority: "low",
    dueDate: new Date('2024-10-18')
  },
  {
    taskTitle: "Update resume",
    description: "Revise and update the resume with new skills and experiences.",
    status: "pending",
    priority: "high",
    dueDate: new Date('2024-10-30')
  },
  {
    taskTitle: "Plan a weekend trip",
    description: "Research destinations and book accommodations for the trip.",
    status: "pending",
    priority: "medium",
    dueDate: new Date('2024-11-05')
  },
  {
    taskTitle: "Clean the house",
    description: "Organize and clean the living room and kitchen.",
    status: "completed",
    priority: "low",
    dueDate: new Date('2024-10-15')
  },
  {
    taskTitle: "Practice coding",
    description: "Spend time on coding challenges to improve programming skills.",
    status: "pending",
    priority: "high",
    dueDate: new Date('2024-10-28')
  },
  {
    taskTitle: "Call the bank",
    description: "Discuss the recent charges and clarify account details.",
    status: "pending",
    priority: "medium",
    dueDate: new Date('2024-10-21')
  },
];


const seedTasks = async () => {
  try{
    await connectDB();
    await Task.deleteMany({})
    await Task.insertMany(mockTasks);
    console.log("Mock data seeded successfully");
    mongoose.connection.close()
  }
  catch(error){
    console.log("Error seeding tasks : " , error);
    mongoose.connection.close();
  }
}

seedTasks()