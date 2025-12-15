const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '..', 'books.json');

function findBookById(bookId) {
    const fileContent = fs.readFileSync(booksFilePath, 'utf-8');
    const books = JSON.parse(fileContent);

    return books.find(book => book.id === bookId);
}

module.exports = {
    findBookById
};