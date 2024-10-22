const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const taskSchema = new Schema ({
 taskTitle : {
  type : String ,
  required : true
 },
 description : {
  type : String,
  required : true
 },
 status : {
  type : String , 
  default : "pending"
 }, 
 priority : {
  type : String ,  
  enum : ['high','medium','low'],
  default : 'medium'
 },
 dueDate :{
  type : Date
 }
})

const Task = mongoose.model('Task' , taskSchema);
module.exports = Task ;
