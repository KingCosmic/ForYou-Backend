const express = require('express');
const router = express.Router();

router.use('/letters', require('./letters'));

module.exports = router;