const db = require('../../models/');

module.exports = {
  getMoviesHandler: function(req, res) {
    db.Movie.findAll()
    .then(movies => res.send(movies, 200))
    .catch(error => res.status(500).send(error));  
  },
  getMovieHandler: function(req, res) {
    console.log(`hit a handler: get movie ${req.params.id}`)  
    res.send('hit a handler: get movie')  
  },
  createMovieHandler: function(req, res) {
    db.Movie.create(req.body)
    .then(response => res.send(response, 201))
    .catch(error => res.status(500).send(error));     
  },
  deleteMovieHandler: function(req, res) {
    console.log('hit a handler: delete movie')      
    res.send('hit a handler: delete movie')      
  },
  searchMoviesHandler: function(req, res) {
    console.log('hit a handler: search movies')      
    res.send('hit a handler: search movies')      
  }
};