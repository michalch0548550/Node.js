
const jwt = require('jsonwebtoken')

const JVTverify = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1].trim()

  jwt.verify(
    token,
    '0080073ef551b7bc8208376453aa6ae1a83f655579fbb76abb725425c8a7ab02b12b7ed5459021ab0c201b8b0c6427fcd6b09668e85bfbc52d443cc90f238309',
    (err, decoded) => {
      if (err) return res.status(401).json({ message: 'unAuthorization' })
      req.user = decoded
      next()
    }
  )
}

module.exports = JVTverify
