const express = require('express')
const {login,getAllStudents}=require('../controllers/users')
const jwtverify=require('../midllewares/JWTverify')
const router = express.Router()
router.post('/',login)
router.get('/',jwtverify,getAllStudents)
module.exports = router

