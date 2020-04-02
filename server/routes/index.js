const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/api/registerdog', (req, res, next) => {
  // const { title, description } = req.body;
  // const imgPath = req.file.url;
  // const imgName = req.file.originalname;
  // const newMovie = new Movie({ title, description, imgPath, imgName })

  newDog.create()
    .then(movie => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router;
