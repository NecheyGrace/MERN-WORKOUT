const express = require("express");
const Workout = require("../moedels/workoutModel");
// require the express router
const router = express.Router();

// get all wokouts handlers
router.get("/", (req, res) => {
  res.json({ mssg: "GET ALL WORKOUTS" });
});

// get a single workorequt
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single Workout" });
});

// post a single workorequt
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete a single workorequt
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a new Workout" });

  // post a single workorequt
  router.patch("/:id", (req, res) => {
    res.json({ mssg: "UPDATE a new Workout" });
  });
});
module.exports = router;
