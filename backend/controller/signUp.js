const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const db = require('../models')
const Users = db.users


module.exports.signUp = asyncHandler(async (req, res) => {
    const { userName, fullName, email, password, profilePic } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user_create = await Users.create({
        user_name: userName,
        full_name: fullName,
        email: email,
        password: hashedPassword,
        profile_picture: profilePic
    })
    console.log(user_create)

    return res.status(201).send({ message: "User Signed Up sucessfully" })
})