const con = require('../Connection') ; 

const handle={}
handle.getques = async()=>
{
    const query = `SELECT * FROM C##PROJECT.PRACTICE `
    

    const binds = {}

    const result = (await con.execute(query , binds , con.options))
    return result.rows ; 
}
handle.getleaderboard = async()=>
{
    const query = `SELECT U.NAME , L.SCORE , L.TITLE  FROM APP_USER U JOIN  LEADERBOARD L ON U.ID = L.USER_ID ORDER BY L.SCORE DESC  `
   // SELECT F.FOLLOWER , U.NAME , U.IMAGE  FROM APP_USER U JOIN FOLLOWS F ON F.FOLLOWER = U.ID  WHERE F.FOLLOWING = :USER_ID 

    const binds = {}

    const result = (await con.execute(query , binds , con.options))
    return result.rows ; 
}

handle.getSpecificQues = async(ID) =>
{
    const query = `SELECT * FROM C##PROJECT.PRACTICE WHERE ID = :ID `
    

    const binds = {ID : ID}

    const result = (await con.execute(query , binds , con.options))
    return result ; 
}
module.exports = handle  ;