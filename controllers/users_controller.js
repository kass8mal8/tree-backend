const User = require('../model/users_model')

const post_user = async(req, res) => {
    const { name, email, photoURL, googleID } = req.body

    try {
        const user = await User.create({
            name, email, photoURL, googleID
        })
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const get_users = async(req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } 
    catch (error) {
        res.status(500).send({message: error})
    }
}

module.exports = {
    post_user,
    get_users
}