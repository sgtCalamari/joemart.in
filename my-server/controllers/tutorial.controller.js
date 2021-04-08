const db = require('../models');
const Project = db.projects;

// Create and Save a new Project
exports.create = (req, res) => {

};

// Retrieve all Projects from the database
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Project.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while retrieving projects."
      });
    });
};

// Find a single Project with an id
exports.findOne = (req, res) => {

};

// Update a Project by the id in the request
exports.update = (req, res) => {

};

// Delete a Project with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Projects from the database
exports.deleteAll = (req, res) => {

};


// Find all Projects which name contains 'kw'
exports.findByNameKw = (req, res) => {

};
