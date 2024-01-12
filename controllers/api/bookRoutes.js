const router = require('express').Router();
const { Book } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allBooks = await Book.findAll()

    res.status(200).json(allBooks);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
