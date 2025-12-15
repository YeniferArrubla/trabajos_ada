const bookModel = require('../models/bookModel');
const bookView = require('../views/bookView');

function handleBookRequest(bookId) {
    const book = bookModel.findBookById(bookId);
    const response = bookView.formatBookResponse(book);

    return response;
}

module.exports = {
    handleBookRequest
};