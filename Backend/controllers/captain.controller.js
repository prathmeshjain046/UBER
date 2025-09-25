const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyRegistered = await captainModel.findOne({ email });
    if(isCaptainAlreadyRegistered) {
        return res.status(400).json({ message: "Captain already registered" });
    }

    const hashedPassword = await captainModel.hashPassword(password);
    
    const captain = await captainService.registerCaptain(
        fullname.firstname,
        fullname.lastname,
        email,
        hashedPassword,
        vehicle.color,
        vehicle.plate,
        vehicle.capacity,
        vehicle.vehicleType
    );

    const token = captain.generateAuthToken();
    
    await captain.save();

    res.status(201).json({token, captain});
        
}