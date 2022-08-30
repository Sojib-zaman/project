import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import PersonalQuesList from './personalques';
//import NavBar from '../NavBar/NavBar';

import Header2 from '../header2';


const IDspecBlog = ({BLOG_ID})=> 
{
    console.log(BLOG_ID);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ Blogs,setBlogs] = useState(null);
    let title = '' ; 

    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[userinfo , setuserinfo] = useState({})
   

    useEffect( ()=>
    {
        const need = async()=>
        {
           
            try {
        
                   userinfo['BLOG_ID'] = BLOG_ID ; 
                const res = await fetch('http://localhost:3000/showpost/idspecpost',  {
                    method: 'POST',
                  
                    
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userinfo)
                     
                } )
                
                const data = await res.json()  
                
                console.log(data)
                if(data.length === 0){
                
                }
                else{
                    //console.log(data[0]) ; 
                    setBlogs(data)
                    console.log(data);
                    
                    
                    
                }
        
            } catch (error) {
                console.log(error);
            }
        }

        need() ;
        
        
    },[])
return (
    <div>
        <Header2></Header2>
        <div className="profile-container">
            <div className="profile-left">
            </div>
            <div className="profile-right">
                <div className="profile-right-header">
                    <h1>ASKED QUESTIONS</h1>
                </div>
                <div className="profile-info">
                    
              
                
                    { 
                    
                        
                    
                   
                    } 

                    
                    
                    
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    
    </div>
        );
    };
    
    export default IDspecBlog;