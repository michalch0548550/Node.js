const jwt= require('jsonwebtoken')
const User = require('../models/User') 

async function SignUp(req, res) {
    try {
        const { id, name } = req.body
        if (!id || !name) {
            return res.status(400).send('Error: id and name are required')
        }
        const user = await User.create({ id, name })
        res.status(201).json(user)
    } catch (err) {
        res.status(500).send(`Error: ${ err.message }`)
    }  
    
}

async function LogIn(req, res) {
    try {   
        const { id } = req.body
        if (!id) {
            return res.status(400).send('Error: id is required')
        }
        const user = await User.findOne({ id })
        if (!user) {
            return res.status(404).send('User not found')
        }   
        const token = jwt.sign(
            { id: user.id, name: user.name },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        )
        res.json( token )
    } catch (err) {
        res.status(500).send(`Error: ${ err.message }`)
    }           
}
module.exports = { LogIn, SignUp }

