
const con = require('../Connection') ; 

const handle = {} 

// add the type as a dropdown option maybe 
//hardcode admin for it 

handle.create = async(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) => 
{
    console.log(NAME , PASSWORD , COUNTRY , EMAIL , IMAGE ) 
    
    const query = `INSERT INTO C##PROJECT.APP_USER (NAME , PASSWORD , COUNTRY , EMAIL , IMAGE )
    VALUES (:NAME ,  :PASSWORD ,  :COUNTRY , :EMAIL , :IMAGE )
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}

handle.verify = async(email , password)=>
{
    const query = `SELECT * FROM C##PROJECT.APP_USER WHERE EMAIL =:email AND PASSWORD =:password`
    console.log("here in create verify")
    console.log(email , password)  ; 
    const binds = {email : email , password: password } 
    const result = (await con.execute(query , binds , con.options)).rows
    console.log(result) ; 
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
   
    const query = ` UPDATE APP_USER
    SET NAME = :NAME , PASSWORD= :PASSWORD , EMAIL = :EMAIL , IMAGE= :IMAGE , COUNTRY = :COUNTRY 
    WHERE ID = :ID
    `

    const binds = {NAME , PASSWORD , COUNTRY , EMAIL , IMAGE , ID  }

    const result = (await con.execute(query , binds , con.options)).rows
   // console.log(result) ;

    return result ; 
}


handle.delete = async(ID,EMAIL ) => 
{
    console.log(ID,EMAIL) 
   
    const query = `  DELETE FROM APP_USER 
    WHERE ID = :ID
   
    `

    const binds = {ID}

    const result = (await con.execute(query , binds , con.options))
  
    const query2 = `    INSERT INTO C##PROJECT.DELETED_USER(EMAIL) VALUES(:EMAIL)
    `

    const binds2 = {EMAIL}

    const result2= (await con.execute(query2 , binds2, con.options))

    console.log(result) ;

    return result ; 
}

module.exports = handle ; 