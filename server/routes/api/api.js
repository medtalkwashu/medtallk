const db = require('../../models/');

module.exports = {
  getMoviesHandler: function(req, res) {
    db.Movie.findAll()
    .then(movies => res.send(movies, 200))
    .catch(error => res.status(500).send(error));  
  },
  getMovieHandler: function(req, res) {
    db.Movie.findOne({ id: req.params.id })
    .then(movie => res.send(movie, 200))
    .catch(error => res.status(500).send(error));  
  },
  createMovieHandler: function(req, res) {
    db.Movie.create(req.body)
    .then(response => res.send(response, 201))
    .catch(error => res.status(500).send(error));     
  },
  deleteMovieHandler: function(req, res) {
    db.Movie.destroy({ id: req.params.id })
    .then(movie => res.send(movie, 200))
    .catch(error => res.status(500).send(error));  
  },
  searchMoviesHandler: function(req, res) {
    console.log('hit a handler: search movies')      
    res.send('hit a handler: search movies')      
  }
};