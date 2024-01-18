const router = require('express').Router();
const medicationRoute = require('./medicationRoutes');

router.use('/medications', medicationRoute);

module.exports = router;
