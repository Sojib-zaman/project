const express = require('express') 
const router = express.Router({mergeParams:true}) 
const query = require('../register_log/create') ; 
router.post('/signup' , async(req , res) =>
{
    try
    {
        console.log("in member signup") ; 
       
        const {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE} = req.body ; 
         console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE)
        const result = await query.create( NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/update' , async(req , res) =>
{
    try
    {
        console.log("in member update") ; 
       
        const {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID} = req.body ; 
        console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID)
        const result = await query.update( NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/delete' , async(req , res) =>
{
    try
    {
        console.log("in member delete") ; 
       
        const { ID , EMAIL} = req.body ; 
        console.log( ID)
        const result = await query.delete(  ID, EMAIL) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


router.post('/deletequestion' , async(req , res) =>
{
    try
    {
        console.log("in member delete Question") ; 
       
        const {ID} = req.body ; 
        console.log( ID)
        const result = await query.deleteQuestion( ID) 
       
        res.end() ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)


router.post('/login' , async(req , res)=>
{
   
    try
    {
        console.log("in member login") ; 
       console.log(req.body) ; 
       
       const { EMAIL , PASSWORD } = req.body ; 
       const result = await query.verify(EMAIL , PASSWORD ) ; 

       console.log(result) ; 
       res.json(result) ;
    }
    catch(err)
    {
        console.log(err) ; 
    }
}
)

router.get('/user/:ID' , async(req , res )=>
{
    
    try 
    {
        const ID =  await req.params.ID ; 
        console.log("ID:")
        console.log(ID) ; 
        const result = await query.getuser(ID) ;
        console.log(result) 
        res.json(result) ; 
    }
    catch(error)
    {
        console.log(error) ; 
    }
})


router.post('/isdeleted' , async(req , res)=>
{
   
    try
    {
        console.log("in member login isdeleted") ; 
       console.log(req.body) ; 
       
       const { EMAIL } = req.body ; 
       const result = await query.isdel(EMAIL) ; 

       console.log(result) ; 
       res.json(result) ;
    }
    catch(err)
    {
        console.log(err) ; 
    }
}
)

router.post('/getnotifications' , async(req , res) =>
{
    try
    {
        console.log("in member getting notifications") ; 
       
        const {USER_ID} = req.body ; 
         console.log(USER_ID)
        const result = await query.getnotif( USER_ID) 
       
        res.json(result) ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/getfollowers' , async(req , res) =>
{
    try
    {
        console.log("in member getting followers") ; 
       
        const {USER_ID} = req.body ; 
         console.log(USER_ID)
        const result = await query.getfollowerlist( USER_ID) 
       
        res.json(result) ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)
router.post('/defsearch' , async(req , res) =>
{
    try
    {
        console.log("in member DEFAULT SEARCH") ; 
       
        const {SEARCH_VALUE , CATEGORY} = req.body ; 
         console.log(SEARCH_VALUE , CATEGORY)
        const result = await query.default_search( SEARCH_VALUE, CATEGORY) 
        console.log("in member") ; 
        console.log(result ) ; 
        res.json(result);
        
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/getallusers' , async(req , res) =>
{
    try
    {
        console.log("in member getting non followers") ; 
       
        const {USER_ID} = req.body ; 
         console.log(USER_ID)
        const result = await query.getall( USER_ID) 
       
        res.json(result) ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

router.post('/addingtosubmissiontable' , async(req , res) =>
{
    try
    {
        console.log("in member adding them to the submission table") ; 
       
        const {ID,USER_ID,STATUS,TIME} = req.body ; 
         console.log(ID,USER_ID,STATUS)
        const result = await query.addtosubtable(ID ,USER_ID,STATUS,TIME) 
       
    res.json(result) ; 
    }
    catch(err)
    {
        console.log(err)  ;
    }
}
)

module.exports = router  ; 