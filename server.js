const express = require("express");
const app = express();
const PORT = 5001;
const connectDB = require("./db")
const Routes = require('./routes/Routes')



app.use(express.json())
connectDB()


app.use('/api' , Routes)

app.get('/', (req , res) => {
  res.send("hello from servre")
} )

app.listen(PORT , console.log(`app is listening on port ${PORT}`))