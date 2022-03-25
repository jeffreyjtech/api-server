'use strict';

function routify (pathName, Collection) {

  const express = require('express');

  const router = express.Router();

  router.post(`/${pathName}`, async (req, res, next) => {
    try{
      let newData = req.body;

      console.log(`${pathName} : creating instance`);
      
      let modelInstance = await Collection.create(newData);

      res.status(201).send(modelInstance);
    } catch (err) {
      next(err);
    }
  });

  router.get(`${pathName}`, async (req, res, next) => {
    try {
      console.log(`${pathName} : reading all instances`);

      let responseData = await Collection.readAll();
      res.status(200).send(responseData);
    } catch (err) {
      next(err);
    }
  });

  

  return router;
}

module.exports = routify;