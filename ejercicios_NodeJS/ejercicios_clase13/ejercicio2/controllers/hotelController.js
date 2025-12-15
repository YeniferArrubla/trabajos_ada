const hotelModel = require('../models/hotelModel');
const hotelView = require('../views/hotelView');

function handleHotelRequest(hotelId) {
    const hotel = hotelModel.findHotelById(hotelId);
    const response = hotelView.formatHotelResponse(hotel);

    return response;
};

module.exports = {
    handleHotelRequest
};