module.exports = app => {
  const projects = require('../controllers/tutorial.controller');

  var router = require('express').Router();

  // Retrieve all Projects
  router.get('/', projects.findAll);

  app.use('/api/projects', router);
}
