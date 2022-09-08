import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

import styled from "styled-components"
import './Leaderboard.scss'
import Header2 from "../header2";

const Leaderboard = (props) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
  
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[probleminfo , setprobleminfo] = useState({})
    let i = 1 ;
    let values ; 
    let nblog;
    const[userinfo , setuserinfo] = useState({}) ; 
let data;

    let title = '' ; 
   
   
    useEffect( ()=>
    {
        
        const need = async()=>
        {
            console.log("in Leaderboard page")
            try {
        
                   
                const res = await fetch('http://localhost:3000/practiceques/leaderboard');
                    
                
                 data = await res.json()  
                console.log("here data")
                console.log(data[0].TITLE)
                if(data.length === 0){
                    console.log("no data")
                }
                else{
                   

                    setuserinfo(data)
                    

                  
                    
                   
                }
        
            } catch (error) {
                console.log(error);
            }
        }

        need() ;

        
        
         nblog = Object.entries(userinfo);
    },[])

    return(
         
        <div class="container">
        <Header2/>
        <div class='table'>
        <h2>Contest Satus</h2>
        <ul class="responsive-table">
        <li class="table-header">
      <div class="col col-1">Rank</div>
      <div class="col col-2">User Name</div>
      <div class="col col-2">Score</div>
      <div class="col col-3">Title</div>
     
    </li> </ul>
        {
           
          
        Object.entries(userinfo).map(blog => (
          
            <ul class="responsive-table">
          <li class="table-row">
            
      <div class="col col-1" data-label="Submission Id">{i}</div>
      <div class="col col-2" data-label="Problem Name">{blog[1].NAME}</div>
      <div class="col col-2" data-label="Username">{blog[1].SCORE}</div>
      <div class="col col-3" data-label="When">{blog[1].TITLE}</div>
      <div style={{visibility : "hidden"}}>{i=i+1}</div>

           </li></ul>
        ))
       
        }   
        
       
        </div>

        </div>
    )
}


    export default Leaderboard;