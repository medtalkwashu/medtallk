const apiRouter = require('express').Router(),
      api = require('./api');

apiRouter.get('/movies/search', api.searchMoviesHandler);
apiRouter.get('/movies/:id', api.getMovieHandler);
apiRouter.delete('/movies/:id', api.deleteMovieHandler);
apiRouter.post('/movies', api.createMovieHandler);
apiRouter.get('/movies', api.getMoviesHandler);

module.exports = apiRouter;