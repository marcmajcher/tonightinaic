'use strict';

/* eslint-env node */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    api: 'ok'
  });
});

module.exports = router;
