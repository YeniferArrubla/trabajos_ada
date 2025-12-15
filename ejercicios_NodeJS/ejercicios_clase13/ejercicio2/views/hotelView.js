function formatHotelResponse(hotel) {
    if (!hotel) {
        return JSON.stringify({
            message: '❌ Hotel no encontrado'
        });
    }

    if (hotel.roomsAvailable === 0) {
        return JSON.stringify({
            message: `🏨 ${hotel.name}: No hay habitaciones disponibles`
        });
    }

    return JSON.stringify({
        message: `🏨 ${hotel.name}: Habitaciones disponibles`,
        data: {
        roomsAvailable: hotel.roomsAvailable
        }
    });
};


module.exports = {
    formatHotelResponse
};