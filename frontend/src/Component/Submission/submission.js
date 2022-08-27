import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import './submission.scss'
import Header2 from "../header2";

const Submissions = (props) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const ID = useParams() ; 
    console.log("ID : "+ID.id) ; 
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[probleminfo , setprobleminfo] = useState({})
    let information = 0 ;
    let values ; 
    let nblog;
    const[userinfo , setuserinfo] = useState({}) ; 
let data;

    let title = '' ; 
   
   
    useEffect( ()=>
    {
        
        const need = async()=>
        {
            console.log("in submission page")
            try {
        
                   
                const res = await fetch('http://localhost:3000/showpost/getspecificprobinfo/'+ID.id);
                    
                
                 data = await res.json()  
                console.log("here data")
                console.log(data[0].TITLE)
                if(data.length === 0){
                    console.log("no data")
                }
                else{
                    //console.log(data[0]) ; 
                   // setPosts(data)
                    //console.log(data);
                    // let info={...userinfo} ; 
                    // info['NAME'] = data.NAME ; 
                    // info['TIME'] = data.TIME ; 
                    // if(data.STATUS == '0')info['STATUS'] ='Wrong Answer'  ;
                    // else info['STATUS'] = 'Accepted'
                    // info['TITLE'] = data.TITLE ; 

                    setuserinfo(data)
                    

                   // values = Object.entries(data); 
                    
                   
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
      <div class="col col-1">Id</div>
      <div class="col col-2">Problem Name</div>
      <div class="col col-2">User Name</div>
      <div class="col col-3">When</div>
      <div class="col col-4">Status</div>
    </li> </ul>
        {
          
        Object.entries(userinfo).map(blog => (
            <ul class="responsive-table">
          <li class="table-row">
      <div class="col col-1" data-label="Submission Id">{ID.id}</div>
      <div class="col col-2" data-label="Problem Name">{blog[1].TITLE}</div>
      <div class="col col-2" data-label="Username">{blog[1].NAME}</div>
      <div class="col col-3" data-label="When">{blog[1].TIME}</div>
      <div class="col col-4" data-label="Status">{blog[1].STATUS}</div>

           </li></ul>
        ))
       
        }   
        
       
        </div>

        </div>
    )
}


    export default Submissions;