const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
   const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
    if(!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const isBlacklisted = await userModel.findOne({token : token});
    if(isBlacklisted) {
        return res.status(401).json({ message: "Unauthorised" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;

        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token." });
    }
}