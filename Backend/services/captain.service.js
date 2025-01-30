const captainModel = require('../models/captain.models');

module.exports.createCaptain = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = new captainModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
};
