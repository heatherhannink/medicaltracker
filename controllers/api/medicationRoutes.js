const router = require('express').Router();
const { Medication } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allMedications = await Medication.findAll()

    res.status(200).json(allMedications);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newMedication = await Medication.create({
      ...req.body
    });

    res.status(200).json(newMedication);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
