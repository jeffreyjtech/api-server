'use strict';

function routify (name, Collection) {

  const express = require('express');

  const router = express.Router();

  router.post(`/${name}`, async (req, res, next) => {
    try{
      let newData = req.body;

      console.log(`${name} creating Instance`);
      
      let modelInstance = await Collection.create(newData);

      res.status(201).send(modelInstance);
    } catch (err) {
      next(err);
    }
  });

  return router;
}

module.exports = routify;