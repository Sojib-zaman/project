import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Header2 from '../header2';
import Questionlist from './queslist';
//import NavBar from '../NavBar/NavBar';
import './showq.css'


const Showq = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ADMIN,setadmin] = useState(null);
    const [ques,setques] = useState(null);
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[searchdata , setsearchdata]=useState(null) ; 
    const choosecat = (event)=>
       {
           console.log("on 2")
           console.log(event.target.name , event.target.value) ; 
           const x={...searchdata}
           x[event.target.name] = event.target.value ; 
           setsearchdata(x)
           console.log("handle change")
           console.log(searchdata)
   
          
   
   
       }

       const searching = async (event)=>
   {
       event.preventDefault();
       console.log(searchdata) ; 
       try {
           console.log("sending to search data from backend") ;
           const res = await fetch('http://localhost:3000/member/getspecql', {
           method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(searchdata)
           })
          
           .then(res => 
               {
                   return res.json()
               }
               ) 
               .then(
                   (data)=>
                   {
                        setques(data)
                       //console.log(data)
                   }
   
                   
               ).catch(err => 
               {
                   console.log(err.message) ; 
               })
           
               }
               catch
               {
                   console.log("eroro")
               }
                  
       



   }
   

    useEffect(()=>
    {
        if(loggedInUser.ADMIN==1)
    {
        setadmin(true);
    }
        let url = 'http://localhost:3000/showpost/showquestions' ;
        
            try
            {
                fetch(url) 
         .then(res => 
            {
                return res.json()
            }
            ) 
            .then(
                (data)=>
                {
                    setques(data)
                    //console.log(data)
                   
                }

                
            ).catch(err => 
            {
                console.log(err.message) ; 
            })
        
            }
            catch
            {
                console.log("eroro")
            }
         
            
       





      
        
    },[])
return (
    <div>
        
        <div className="profile-container" id="qcontainer">
           <Header2></Header2>
            
        <div className="profile-right">
            <div></div>
                <div className="top-header">
                    <h1>QUESTIONS ASKED BY USERS</h1>
                </div>
                <form id="my-Form2">
            <select id="box2" name="CATEGORY" placeholder='category' selected="USER" onChange={choosecat} >
            <option value="">Type</option>     
            <option value="CATEGORY">CATEGORY</option>
            <option value="TIME">Time</option>
            <option value="AUTHOR">Author</option>
            <option value="UPVOTES">Popularity</option>
           
           
            </select> <input onClick={searching}  type="submit" value="Submit"  style={{ backgroundColor:"cyan"}} id='box3'/></form>
        </div>
               
                    
                
               
                    { ques && < Questionlist Questionlist={ques} title="All Questions asked by users" Admin={ADMIN}/>
                    } 
                    
                    
                   
                
           </div>
            

    </div>
        );
    };
    
    export default Showq;