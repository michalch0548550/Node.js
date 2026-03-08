const jwt= require('jsonwebtoken')
const User=require('../models/User')
const bcrypt= require('bcrypt')

//הרשמה
const register= async (req,res)=>{
const {username, password,role} = req.body
if (!username || !password) {
return res.status(400).json({message:'username and password are fieldes required'})
}
const duplicate = await User.findOne({username:username}).lean()
if(duplicate){
return res.status(409).json({message:"Duplicate username"})
}
const hashedPwd = await bcrypt.hash(password, 10)
const userObject= {username:username,role:role,password:hashedPwd}
const user = await User.create(userObject)
if (user) {
return res.status(201).json({message:`New user ${user.username} created` })
} else {
return res.status(400).json({message:'Invalid user received'})
}
}

//התחברות
const login = async (req, res) => {
const { username, password } = req.body
if (!username || !password) {
return res.status(400).json({ message: 'username and password are fieldes required'
})
}
const foundUser = await User.findOne({username}).lean()
if (!foundUser ) {
return res.status(401).json({ message: 'Unauthorized' })
}
const match = await bcrypt.compare(password,
foundUser.password)
if(!match)return res.status(401).json( {message:'Unauthorized' })
const userInfo= {
    username:foundUser.username, 
    role: foundUser.role
}
const accessToken=jwt.sign(userInfo,process.env.SECRET_CODE)
res.json({accessToken:accessToken})
}

module.exports={login,register};

