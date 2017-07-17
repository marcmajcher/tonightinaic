'use strict';

/* eslint-env node */

const express = require('express');
const router = express.Router();
const theaters = require('../lib/theaters');

router.get('/', (req, res) => {
  theaters.all().then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
