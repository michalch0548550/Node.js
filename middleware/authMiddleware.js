const jwt= require('jsonwebtoken')
const authmiddleware = (req, res, next) => {
const authHeader = req.headers.authorization 
if (!authHeader?.startsWith('Bearer ')) {
return res.status(401).json({ message: 'Unauthorized' })
}
const token = authHeader.split(' ')[1]
jwt.verify(
token,
'0f87b84660fbe58ca743fd7bff79197ed6968ed63a842c9d7bc213e0416c613bd73a26d596a32ccca04f70dd521fa1d6bc0ba4bb5d2b3378962fd8716e28cea2',
(err, decoded) => {
if (err) return res.status(403).json({ message:
'Forbidden' })
req.user = decoded
next()
}
)
}
module.exports = authmiddleware