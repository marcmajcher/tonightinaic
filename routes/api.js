'use strict';

/* eslint-env node */

const express = require('express');
const router = express.Router();
const theaters = require('../lib/theaters');

router.get('/', (req, res) => {
  res.send({
    api: 'ok'
  });
});

router.get('/hideout', (req, res) => {
  res.send(theaters.hideout(new Date()));
});
router.get('/tit', (req, res) => {
  res.send(theaters.tit(new Date()));
});
router.get('/tnm', (req, res) => {
  res.send(theaters.tnm(new Date()));
});
router.get('/ctt', (req, res) => {
  res.send(theaters.ctt(new Date()));
});

module.exports = router;
