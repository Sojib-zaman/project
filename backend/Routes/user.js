const express  = require('express') ; 
const router = express.Router({mergeParams:true})
const handle = require('../sql') 
const member = require('./member') 
const addblog = require('./addblog')
const askques = require('./addques');
const showpost = require('./showpost') ; 
//const problemset = require('./problems') 


//const answer = require('./answer') 
router.use('/member' , member) ; 
router.use('/addblog' , addblog) ;
router.use('/addques',askques) 
router.use('/showpost', showpost) ; 
//router.use('/problems' , problemset) ; 


//router.use('/answer' , answer) ; 
module.exports = router 