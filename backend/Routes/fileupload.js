const express = require('express');
const multer = require('multer');


const router = express.Router({mergeParams:true}) 
const query = require('../register_log/showpost') ; 






const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //cb(null, 'public')
        cb(null,'F:/project-master/frontend/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

router.post('/upload',  async(req, res) => {
console.log("in upload")
   console.log(req.data)
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        

        return res.status(200).send(req.files)
    })
});

router.post('/save',  async(req, res) => {
    console.log("in save")
       console.log(req.body)
       let {FILE_NAME , USER_ID , CAPTION} = req.body ; 
        console.log(FILE_NAME , USER_ID , CAPTION)
     
        const result = await query.fileNameupload(FILE_NAME , USER_ID , CAPTION ) 
        console.log("in save 43") ; 
        console.log(result ) ; 
        res.json(result);
       
        
    });
    
    router.get('/getallimage',  async(req, res) => {
 
            const result = await query.getallimage() 
            console.log("aff")
            console.log(result)
            res.json(result.rows);
           
            
        });
        


module.exports = router