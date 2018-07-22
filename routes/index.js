const express = require('express');
const router = express.Router();

router.use('/', require('./letters'));

module.exports = router;