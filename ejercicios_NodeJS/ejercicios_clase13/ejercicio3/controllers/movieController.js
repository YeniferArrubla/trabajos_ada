const movieModel = require('../models/movieModel');
const movieView = require('../views/movieView');

function handleMovieRequest(movieTitle) {
    const movie = movieModel.findMovieByTitle(movieTitle);
    const response = movieView.formatMovieResponse(movie);

    return response;
};

module.exports = {
    handleMovieRequest
};