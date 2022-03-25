'use strict';

function routify (path, Collection) {

  const express = require('express');

  const router = express.Router();

  router.post(`/${path}`, async (req, res, next) => {
    try{
      let newData = req.body;

      console.log(`${path} creating Instance`);
      
      let modelInstance = await Collection.create(newData);

      res.status(201).send(modelInstance);
    } catch (err) {
      next(err);
    }
  });

  return router;
}

module.exports = routify;