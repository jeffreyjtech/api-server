'use strict';

// Import dependencies
const express = require('express');

// Use dependencies
const app = express();
app.use(express.json());

// Import modules
const logger = require('./middleware/logger');

const { MagikarpCollection } = require('./models');

const routify = require('./routes/routify');

const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');

const PORT = process.env.PORT || 3000;

// Use catch-all modules
app.use(logger);

// Use route modules
app.use(routify('magikarp', MagikarpCollection));
app.use(routify('species'));

// Use error-handler modules
app.use(handle404);
app.use(handle500);

module.exports = {
  app,
  start: () => {
    app.listen(PORT, () => {
      console.log('App is running on PORT', PORT);
    });
  },
};
