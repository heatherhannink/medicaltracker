const router = require('express').Router();
const tripRoutes = require('./medicationRoutes');

router.use('/trips', tripRoutes);

module.exports = router;
