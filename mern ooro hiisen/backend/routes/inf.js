const router = require("express").Router();
let Inf = require("../models/exercise.model");

router.route("/").get((req, res) => {
  //medee uzex heseeg
  Inf.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/medeeOruulah").post((req, res) => {
  // const username = req.body.username;
  // console.log("bbbbbbbbbbbbbbbbbba:::::::::" + req.body.date);
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.parse(req.body.date);

  const newExercise = new Inf({
    // username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("medeelel amjilttai orloo!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
