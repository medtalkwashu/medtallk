

module.exports = {
  getMoviesHandler: function(req, res) {
    console.log('hit a handler: get movies')  
    res.send('hit a handler: get movies')  
  },
  getMovieHandler: function(req, res) {
    console.log(`hit a handler: get movie ${req.params.id}`)  
    res.send('hit a handler: get movie')  
  },
  createMovieHandler: function(req, res) {
    console.log('hit a handler: create movie')      
    res.send('hit a handler: create movie')      
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