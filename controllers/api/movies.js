var Movie = require('../../models/movie');

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
};

function deleteMovie(req, res) {
    Movie.findByIdAndDelete(req.params.id)
    .then(function(movie){
        res.status(200).json(movie);
    });
}

function updateMovie(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(movie){
        res.status(200).json(movie);
    });
}

function createMovie(req, res) {
    Movie.create(req.body)
    .then(function(movie) {
        res.status(201).json(movie);
    });
  }

function getOneMovie(req, res) {
    Movie.findById(req.params.id)
    .populate('cast')
    .then(function(movie) {
    res.status(200).json(movie);
      });
    }
    

function getAllMovies(req, res) {
  Movie.find({})
  .populate('cast')
  .then(function(movies) {
    res.status(200).json(movies);
});
}
