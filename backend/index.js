const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const taskRoutes = require("./routes/task.routes");

const port = 8082;
app.use(cors());
const DB_URI = "mongodb://localhost:27017/task-manager";



app.use(express.json());
app.use("/tasks", taskRoutes);

mongoose
  .connect(DB_URI
)
  .then(() => {
    console.log("DB connected !!");
  })
  .catch((error) => {
    console.log("Error in connecting DB", error);
  });

app.listen(port, () => {  
  console.log("app is listening at port 8082");
  
});
