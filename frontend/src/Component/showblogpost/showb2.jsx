import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Header2 from '../header2';
import BlogList from './bloglist';
//import NavBar from '../NavBar/NavBar';
import './showb.css'


const Showb = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [blogs,setPosts] = useState(null);
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
            const res = await fetch('http://localhost:3000/member/getspecbl', {
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
                        setPosts(data)
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



       



        
        let url = 'http://localhost:3000/showpost/showblogs' ;
        
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
                    setPosts(data)
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
        <div className="profile-container" id="container">
            <Header2/>
            <br></br>

            


           
            <div className="profile-right">
                <div className="profile-right-header">
                    <h1>BLOG POSTS</h1>
                </div>
                <form id="my-Form2">
            <select id="box2" name="CATEGORY" placeholder='category' selected="USER" onChange={choosecat} >
            <option value="">Type</option>     
            <option value="CATEGORY">CATEGORY</option>
            <option value="TIME">Time</option>
            <option value="AUTHOR">Author</option>
            <option value="UPVOTES">Popularity</option>
           
           
            </select> <input onClick={searching}  type="submit" value="Submit"  style={{ backgroundColor:"cyan"}} id='box3'/></form>
                <div>
                    
                
                
                    { blogs && < BlogList blogs={blogs} title="All Blogs"/>
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
    
    export default Showb;