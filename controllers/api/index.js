const router = require('express').Router();
const tripRoutes = require('./bookRoutes');

router.use('/trips', tripRoutes);

module.exports = router;
