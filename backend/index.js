const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const taskRoutes = require("./routes/task.routes");
require("dotenv").config();
const port = process.env.PORT  || 10000;
const Mongo_URL = process.env.MONGODB_URL;

app.use(cors());



app.use(express.json());
app.use("/tasks", taskRoutes);

mongoose
  .connect(Mongo_URL
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
