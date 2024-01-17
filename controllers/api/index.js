const router = require('express').Router();
const medicationRoute = require('./medicationRoutes');

router.use('/medication', medicationRoutes);

module.exports = router;
