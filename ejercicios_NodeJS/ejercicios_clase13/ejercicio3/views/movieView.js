function formatMovieResponse(movie) {
    if (!movie) {
        return JSON.stringify({
            message: '❌ Película no encontrada'
        });
    }

    return JSON.stringify({
        message: '🎬 Película encontrada:',
        data: movie
    });
};

module.exports = {
    formatMovieResponse
};