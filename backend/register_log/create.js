const OracleDB = require('oracledb');
const { DATE } = require('oracledb');
const con = require('../Connection') ; 

const handle = {} 

handle.createAdmin = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ADMIN  ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE, ADMIN   ) 
    
    const query = ` BEGIN 
    CREATE_ADMIN( :NAME , :PASSWORD , :COUNTRY , :EMAIL , :IMAGE , :ADMIN);
    END;
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ADMIN}

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}



handle.makeadmin = async(ID) => 
{
    console.log(ID) 
    
    const query = `
    BEGIN
        MAKE_ADMIN(:ID);
    END;
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}


handle.create = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) 
    
    const query = `BEGIN
    USER_SIGNUP(:NAME , :PASSWORD , :COUNTRY , :EMAIL , :IMAGE) ; 
    END ;
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}

handle.verify = async(email , password)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE EMAIL =:email AND PASSWORD =:password`
    //console.log("here in create verify")
    //console.log(email , password)  ; 
    const binds = {email : email , password: password } 
    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ; 
    return result ; 
}

handle.isdel = async(email)=>
{
    
//     const query = `
//    SELECT * FROM IS_DELETED(:email)
 
//     `

 const query=`SELECT * FROM DELETED_USER WHERE EMAIL=:email`
    console.log("here in isdel")
    console.log(email)  ; 
    const binds = {email} 
    const result = (await con.execute(query , binds , con.options))
    console.log(result) ; 
    return result ; 
}

handle.getuserbyname = async(NAME)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE NAME = :NAME `
 
    const binds = {NAME:NAME } 
    
    const result = (await con.execute(query , binds , con.options)).rows
   console.log("in create");
    console.log(result) ; 
    return result; 
}
// handle.showbycat = async(CATEGORY)=>
// {

//     const query = `SELECT * FROM BLOG ORDER BY CATEGORY`
 
//     const binds = {} 
    
//     const result = (await con.execute(query , binds , con.options))
//    console.log("in create");
//     console.log(result) ; 
//     return result; 
// }


handle.showbycat = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , P.ID , U.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , P.CATEGORY , P.UPVOTES FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID  ORDER BY P.CATEGORY`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}

handle.showqytime = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , Q.ID ,U.ID, Q.QUES_CONTENT , to_char(Q.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , Q.CATEGORY FROM QUESTIONS Q JOIN APP_USER U ON Q.USER_ID = U.ID  ORDER BY Q.TIME`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}
handle.showqyauth = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , Q.ID ,U.ID, Q.QUES_CONTENT , to_char(Q.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , Q.CATEGORY FROM QUESTIONS Q JOIN APP_USER U ON Q.USER_ID = U.ID  ORDER BY U.NAME`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}
handle.showqyupv = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , Q.ID ,U.ID, Q.QUES_CONTENT , to_char(Q.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , Q.CATEGORY FROM QUESTIONS Q JOIN APP_USER U ON Q.USER_ID = U.ID  ORDER BY Q.UPVOTES DESC`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}
handle.showqycat = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , Q.ID ,U.ID, Q.QUES_CONTENT , to_char(Q.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , Q.CATEGORY FROM QUESTIONS Q JOIN APP_USER U ON Q.USER_ID = U.ID  ORDER BY Q.CATEGORY`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}

handle.showbytime = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , P.ID , U.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , P.CATEGORY , P.UPVOTES FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID  ORDER BY P.TIME`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}


handle.showbyauth = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , P.ID , U.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , P.CATEGORY , P.UPVOTES FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID  ORDER BY U.NAME`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}

handle.showbyupv = async(CATEGORY)=>
{

    const query = `SELECT U.NAME , P.ID , U.ID , P.BLOG_TITLE , P.BLOG_CONTENT , to_char(P.TIME ,'YYYY-MM-DD HH24:MI:SS') AS TIME , P.CATEGORY , P.UPVOTES FROM BLOG P JOIN APP_USER U ON P.USER_ID = U.ID  ORDER BY P.UPVOTES DESC`
 
    const binds = {} 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in create");
    console.log(result) ; 
    return result; 
}
handle.default_search = async(SEARCH_VAL, CATEGORY)=>
{
    console.log(SEARCH_VAL, CATEGORY) ; 
    let query ; 
    SEARCH_VAL = '%'+SEARCH_VAL+'%' ; 
    if(CATEGORY=='USER')
    {
         query = `
    SELECT ID , NAME,COUNTRY , IMAGE FROM C##PROJECT.APP_USER WHERE NAME LIKE :SEARCH_VAL`
    }
    else if(CATEGORY=='BLOGS')
    {
         query = `
        SELECT ID ,  BLOG_TITLE,BLOG_CONTENT,USER_ID,CATEGORY FROM C##PROJECT.BLOG WHERE BLOG_TITLE LIKE :SEARCH_VAL`
    }
    else if(CATEGORY=='QUESTIONS')
    {
         query = `
        SELECT  ID , QUES_CONTENT,CATEGORY,TIME FROM C##PROJECT.QUESTIONS WHERE QUES_CONTENT LIKE :SEARCH_VAL`
    }
    else{
         query = `
        SELECT  ID , TITLE,CATEGORY FROM C##PROJECT.PRACTICE WHERE TITLE = :SEARCH_VAL`
    }
    


 
    const binds = {SEARCH_VAL:SEARCH_VAL } 
    
    const result = (await con.execute(query , binds , con.options))
   console.log("in DEF SEARCH");
    console.log(result) ; 
    return result.rows; 
}


handle.getuser = async(ID)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE ID = :ID `
    console.log("here in create GETUSER")
    console.log(ID)  ; 
    const binds = {ID:ID } 
    const result = (await con.execute(query , binds , con.options)).rows
    console.log(result) ; 
    return result ; 
}

handle.update = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE, ID  ) 
   
    const query = ` 
    BEGIN
    UPDATE_USERINFO(:NAME , :PASSWORD , :COUNTRY , :EMAIL , :IMAGE, :ID ) ; 
    END ;
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID  }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}


handle.delete = async(ID,EMAIL ) => 
{
    console.log(ID,EMAIL) 
    const bindsx = {ID}
    let queryx = ` 
    DELETE  FROM SAVED_POST 
    WHERE USER_ID = :ID 
    `
    let resultx= (await con.execute(queryx , bindsx , con.options))


    queryx = ` 
    DELETE  FROM COMMENTS 
    WHERE USER_ID = :ID 
    `
    resultx= (await con.execute(queryx , bindsx , con.options))

    //REMOVE FROM UPVOTE 
    queryx = ` 
    DELETE  FROM BLOG 
    WHERE USER_ID = :ID 
    `
    resultx= (await con.execute(queryx , bindsx , con.options))

    const bindsy = {ID}
   


    const aqueryy = `
    DELETE FROM ANSWERS 
    WHERE USER_ID = :ID
    `;
    const bixxndsy = {ID : ID ,} ; 
    const resultya= (await con.execute(aqueryy , bixxndsy , con.options))


    const queryy = ` 
    DELETE FROM QUESTIONS 
    WHERE USER_ID = :ID
    `
    let resulty= (await con.execute(queryy , bindsy , con.options))


    let qffollow = ` DELETE FROM FOLLOWS 
    WHERE FOLLOWING = :ID OR FOLLOWER = :ID 
   
    `

    const biands = {ID}

    let reasult = (await con.execute(qffollow , biands , con.options))


    let w = ` DELETE FROM NOTIFICATIONS 
    WHERE USER_ID=:ID
   
    `

     

     reasult = (await con.execute(w, biands , con.options))
    
     let w2 = ` DELETE FROM LEADERBOARD 
     WHERE USER_ID=:ID

 `  
 const val = {ID} ;

  let reult = (await con.execute(w2, val , con.options))
  console.log("for leader")
  console.log(reult) ;

  w = ` DELETE FROM SUBMISSION 
  WHERE USER_ID=:ID

`



    reasult = (await con.execute(w, biands , con.options))


const query = ` BEGIN
    DELETE_USER(:ID);
    END;
   
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options))
  
    console.log("in qy2222")


    const query2 = `    INSERT INTO C##PROJECT.DELETED_USER(EMAIL) VALUES(:EMAIL)
    `

    const binds2 = {EMAIL}

    const result2= (await con.execute(query2 , binds2, con.options))

    console.log(result) ;

    return result ; 
    
}



handle.deleteQuestion = async(ID ) => 
{
    console.log(ID) 
   
    const query = ` 
    DELETE FROM ANSWERS
    WHERE QUES_ID = :ID 
   
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options))
  
    const query2 = `   DELETE FROM QUESTIONS
    WHERE ID = :ID 
    `

    const binds2 = {ID}

    const result2= (await con.execute(query2 , binds2, con.options))

    console.log(result) ;

    return result ; 
}


handle.getnotif = async(USER_ID ) => 
{
    console.log("in get notification")
    console.log(USER_ID  ) 
    
    const query = `
   SELECT * FROM C##PROJECT.NOTIFICATIONS WHERE USER_ID = :USER_ID ORDER BY TIME DESC ;
    `

    const binds = {USER_ID}

    const result = (await con.execute(query , binds , con.options)).rows
    //console.log(result) ;

    return result ; 
}


handle.getfollowerlist = async(USER_ID ) => 
{
    console.log("in get followers")
    console.log(USER_ID  ) 
    
    const query = `
   SELECT F.FOLLOWER , U.NAME , U.IMAGE  FROM APP_USER U JOIN FOLLOWS F ON F.FOLLOWER = U.ID  WHERE F.FOLLOWING = :USER_ID 
    `

    const binds = {USER_ID}

    const result = (await con.execute(query , binds , con.options)).rows
    //console.log(result) ;

    return result ; 
}


handle.getall = async(USER_ID ) => 
{
    console.log("in get followers")
    console.log(USER_ID  ) 
    
    const query = `
   SELECT U.ID , U.NAME , U.IMAGE  FROM APP_USER U WHERE U.ID != :USER_ID ORDER BY U.ADMIN
    `

    const binds = {USER_ID}

    const result = (await con.execute(query , binds , con.options)).rows
    //console.log(result) ;

    return result ; 
}

handle.addtosubtable = async(ID,USER_ID,STATUS,TIME)=>
{

    const query = ` INSERT INTO C##PROJECT.SUBMISSION(PROBLEM_ID , USER_ID , STATUS,TIME) VALUES(:ID , :USER_ID , :STATUS,:TIME)`
 
    const binds = {ID,USER_ID,STATUS,TIME} 
    
    const result = (await con.execute(query , binds , con.options)).rows
   console.log("in adding to submission table");
    console.log(result) ; 
    return result; 
}


handle.fcount = async(USER_ID) => 
{
    
    //console.log("in register log AC count ") 
    //console.log(ID)
    console.log(USER_ID )
    console.log("checking") ; 
    const query = `
    BEGIN
     :RET :=  FOLLOWER_COUNT(:USER_ID) ; 
    END;
    
    `
    
    const binds={USER_ID , RET:{dir:OracleDB.BIND_OUT , type: OracleDB.NUMBER},};
    const result = (await con.execute(query , binds , con.options))

   


    return result ; 
}

module.exports = handle ; 