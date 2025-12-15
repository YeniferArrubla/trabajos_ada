function formatBookResponse(book) {
    if (!book) {
        return JSON.stringify({
            message: '❌ No existe ese libro'
        });
    }

    return JSON.stringify({
        message: '📘 Libro encontrado:',
        data: book
    });
}

module.exports = {
    formatBookResponse
};