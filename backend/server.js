require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
// express app
const app = express();
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/workouts", workoutRoutes);
// listen for requests

app.listen(process.env.PORT, () => {
  console.log("listening for requests on port 4000");
});
