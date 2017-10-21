const express = require('express');
      parser = require('body-parser'),
      morgan = require('morgan'),
      apiRoutes = require('./routes/api/'),
      PORT = process.env.PORT || 3000;

var app = express()
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(express.static('../public'))
  .use('/api', apiRoutes)
  .use(morgan(':method :url :status :res[content-length] - :response-time ms'));
  
app.listen(PORT, () => console.log(`server is listening at ${PORT}`))
