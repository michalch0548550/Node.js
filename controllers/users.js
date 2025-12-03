const jwt= require('jsonwebtoken')
const students=[
    {firstName:"chaim",lLastName:"levi",id:"4561",grade:"5",age:"15",evg:"10",password:"8547"},
    {firstName:"yosi",lLastName:"coen",id:"8524",grade:"4",age:"16",evg:"99",password:"8574"},
    {firstName:"chaim",lLastName:"charar",id:"8524",grade:"4",age:"17",evg:"17",password:"1265"},
]

exports.login=(req,res)=>{
const {firstName,password}=req.body
if(!password||!firstName){
    res.status(400).json({message:'fieled user'})
}
const userDetails=students.find(x=>x.password===password)
if(!userDetails){
    res.status(401).json({message:'user not found'})
}
const userInfo={
    firstName:firstName,
    lLastName:userDetails.lLastName,
    grade:userDetails.grade
}
const myToken=jwt.sign(userInfo,'0080073ef551b7bc8208376453aa6ae1a83f655579fbb76abb725425c8a7ab02b12b7ed5459021ab0c201b8b0c6427fcd6b09668e85bfbc52d443cc90f238309')
res.send(myToken)
}
exports.getAllStudents=(req,res)=>{
res.send(students)
}
