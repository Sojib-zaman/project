const { query } = require('express');
const func = require('./Connection') ; 
const handle = {}
handle.run = async()=>
{
    const query = `select * from PROFILE`;
    const binds = { };
    const result = (await func.execute(query , binds , func.options)).rows ;
    return result ; 
}
module.exports = handle ; 