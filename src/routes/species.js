'use strict';

const express = require('express');

const { SpeciesCollection } = require('../models');

const router = express.Router();

router.post('/species', async (req, res, next) => {
  console.log('Species Route WIP');
  res.status(200).send('Species Route WIP');
});


module.exports = router;