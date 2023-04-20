// covers the entry file for the bk app and register our expess app
// npm init -y install depndencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      //async func, so we have to listen for requests
      console.log("listening for requests on port", process.env.PORT);
    });
  })

  .catch((error) => {
    console.log(error);
  });
