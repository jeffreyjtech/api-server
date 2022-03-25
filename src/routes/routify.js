'use strict';

// This module exports a function called routify
// Its purpose is to return a full CRUD route set for a sequelize Collection to be used in Express middleware stack
// The parameters are pathName and Collection
// Ids for finding an object received via URL params
// Data for POSTing or PUTing an object is received via a JSON request body

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

  router.get(`/${pathName}`, async (req, res, next) => {
    try {
      console.log(`${pathName} : reading all instances`);

      let responseData = await Collection.readAll();
      res.status(200).send(responseData);
    } catch (err) {
      next(err);
    }
  });

  router.get(`/${pathName}/:id`, async (req, res, next) => {
    try {
      let id = req.params.id;

      console.log(`${pathName} : reading one instance with id: ${id}`);

      let responseData = await Collection.read(id);
      res.status(200).send(responseData);
    } catch (err) {
      next(err);
    }
  });

  router.put(`/${pathName}/:id`, async (req, res, next) => {
    try {
      let id = req.params.id;
      let newData = req.body;

      console.log(`${pathName} : updating instance with id: ${id}`);

      let responseData = await Collection.update(id, newData);
      res.status(200).send(responseData);
    } catch (err) {
      next(err);
    }
  });

  router.delete(`/${pathName}/:id`, async (req, res, next) => {
    try {
      let id = req.params.id;

      console.log(`${pathName} : deleting instance with id: ${id}`);

      let responseData = await Collection.delete(id);

      res.status(200).send(responseData);
    } catch (err) {
      next(err);
    }
  });

  return router;
}

module.exports = routify;