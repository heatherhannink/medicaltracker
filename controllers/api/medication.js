const router = require('express').Router();

const { medication } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allMedication = await Medication.findAll()

    res.status(200).json(allMedication);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {

    const newMedication = await Medication.create({

    });

    res.status(200).json(newMedication);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
