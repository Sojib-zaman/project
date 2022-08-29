const express = require('express') ;
const app = express() ; 


const cors = require('cors') ; 
const path = require('path')
app.use(express.json());
app.use(cors()) ;
app.use('F:/project-master/backend/public/', express.static(path.join(__dirname, 'F:/project-master/backend/public/')));

const user = require('./Routes/user'); 
app.use('/' , user)  ; 

const admin = require('./Routes/Admin')
app.use('/admin' , admin) ; 




module.exports = app ; 