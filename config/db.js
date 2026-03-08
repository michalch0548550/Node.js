require('dotenv').config()
const {connect}=require('mongoose')
const ToConnect= ()=>{
    connect(process.env.CONNECTION_STRING)
    .then(()=>{console.log("conncted seccede")})
    .catch(err=>{console.error(err)})
}
module.exports={ToConnect};