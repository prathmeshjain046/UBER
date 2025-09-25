const captainModel = require("../models/captain.model");



module.exports.registerCaptain = async (firstname , lastname, email, password, color, plate, capacity, vehicleType) => {

    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("Required fields are missing");
    }

    const captain = captainModel({
        fullname: {
            firstname,
            lastname,
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
}
    