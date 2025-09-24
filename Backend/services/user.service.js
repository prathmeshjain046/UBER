const userModel = require("../models/user.model");


module.exports.createUser = async ({firstname, lastname, email, password}) => {

    if(!firstname || !email || !password) {
        throw new Error("Required fields are missing");
    }

    const user = userModel({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
    });

    return user;
}
