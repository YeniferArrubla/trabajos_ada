const fs = require('fs');
const path = require('path');

const hotelsFilePath = path.join(__dirname, '..', 'hotels.json');

function findHotelById(hotelId) {
    const fileContent = fs.readFileSync(hotelsFilePath, 'utf-8');
    const hotels = JSON.parse(fileContent);

    return hotels.find(hotel => hotel.id === hotelId);
};

module.exports = {
findHotelById
};