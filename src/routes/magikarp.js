'use strict';

const express = require('express');

const { MagikarpCollection } = require('../models');

const router = express.Router();

router.post('/magikarp', async (req, res, next) => {
  console.log('Magikarp Route WIP');
  res.status(200).send('Magikarp Route WIP');
});

module.exports = router;