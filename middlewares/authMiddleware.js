const jwt = require('jsonwebtoken');
const authmiddleware = (req, res, next) => {
const authHeader = req.headers.authorization 
if (!authHeader?.startsWith('Bearer ')) {
return res.status(401).json({ message: 'Unauthorized' })
}
const token = authHeader.split(' ')[1]
jwt.verify(
token,
process.env.SECRET_CODE,
(err, decoded) => {
if (err) return res.status(403).json({ message:'Forbidden' })
req.user = decoded
next()
}
)
}
module.exports = authmiddleware