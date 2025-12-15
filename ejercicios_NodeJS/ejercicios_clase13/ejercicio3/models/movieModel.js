const fs = require('fs');
const path = require('path');

const moviesFilePath = path.join(__dirname, '..', 'movies.json');

function findMovieByTitle(movieTitle) {
    const fileContent = fs.readFileSync(moviesFilePath, 'utf-8');
    const movies = JSON.parse(fileContent);

    return movies.find(movie => movie.title.toLowerCase() === movieTitle.toLowerCase());
};

module.exports = {
    findMovieByTitle
};