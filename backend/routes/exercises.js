// const router = require('express').Router();
// let Exercise = require('../models/exercise.model');

// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then((exercises) => res.json(exercises))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);

//   const newExercise = new Exercise({
//     username,
//     description,
//     duration,
//     date,
//   });

//   newExercise
//     .save()
//     .then(() => res.json('Exercise added!'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercises) => res.json(exercises))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/delete/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then((exercises) => res.json(exercises))
//     .catch((err) => req.status('400').json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercises) => {
//       exercises.username = req.body.username;
//       exercises.duration = Number(req.body.duration);
//       exercises.description = req.body.description;
//       exercises.date = Date.parse(req.body.date);

//       exercises
//         .save()
//         .then(() => res.json('Exercises Updates'))
//         .catch((err) => res.status(400).json('Error:' + err));
//     })
//     .catch((err) => res.status(400).json('Error :' + err));
// });

// module.exports = router;

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find().then((exercise) => res.json(exercise));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const duration = Number(req.body.duration);
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    duration,
    description,
    date,
  });

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch((err) => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted!!!'))
    .catch((err) => res.status(400).json(err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.data = req.body.date;
      exercise.duration = req.body.duration;

      exercise
        .save()
        .then(() => res.json('Exercise updated!!!'))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
