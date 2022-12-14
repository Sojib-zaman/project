import React, { useEffect } from 'react';
import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Header2 from '../header2';
import './defsearch.css'
import SpecBlog from './specblogshow';
//import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


const DefaultSearch = ()=> 
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let navigate = useNavigate() ; 
    let location  = useLocation() ; 
    const[searchdata , setsearchdata]=useState(null) ; 
    const[blogs,setblogs] = useState(null) ; 
    const[ques,setques] = useState(null) ; 
    const[user,setuser] = useState(null) ; 
    const[prc,setprc] = useState(null) ; 

    const handleChange = (event)=>
    {
        console.log(event.target.name , event.target.value) ; 
        const x={...searchdata}
        x[event.target.name] = event.target.value ; 
        setsearchdata(x)
        console.log("handle change")
        console.log(searchdata)

       


    }
    const handleChange2 = (event)=>
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
            const res = await fetch('http://localhost:3000/member/defsearch', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchdata)
            })
            const data = await res.json()  
            if(data.length === 0){
                
            }
            else{
                //console.log(data[0]) ; 
               if(data[0].COUNTRY != undefined)
                    setuser(data) ;
                else if(data[0].BLOG_TITLE!=undefined)
                    setblogs(data) ; 
                else if(data[0].TITLE!=undefined)
                    setprc(data) ; 
                else setques(data) ;

                //console.log(data);
                
                
                
            }
    
           console.log(data[0].BLOG_TITLE)
        } catch (error) {
            console.log(error);
        }
         
        


    }

    useEffect(()=>
    {
        
         
                
    },[])
return (
    
    <div>
        <div className="profile-container" id="container">
            <Header2/>
           




            <div id='container2' ><h2 id='header_cat'>Search by Category</h2>
          <form id="my-Form">
            <textarea type="text" name="SEARCH_VALUE" id='box' placeholder="Value" onChange={handleChange} cols='100'/>
            <br/> 
            <select id="box2" name="CATEGORY" placeholder='category' selected="USER" onChange={handleChange2}>
            <option value="">Type</option>     
  <option value="USER">user</option>
  <option value="QUESTIONS">ques</option>
  <option value="BLOGS">blogs</option>
  
</select>
            <br/>  <br/>  <br/>  <br/>
            <input onClick={searching}  type="submit" value="Submit"  style={{ backgroundColor:"cyan"}} id='box3'/>
            <br/>  <br/>  <br/>  <br/>
          </form>
          </div>

                {
                    blogs&& <SpecBlog BLOGS = {blogs} QUESTIONS={null} USER={null} PRACTICE={null}></SpecBlog>
                }
                {
                    ques&&<SpecBlog BLOGS = {null} QUESTIONS={ques} USER={null} PRACTICE={null} ></SpecBlog>
                }
                {
                    user&& <SpecBlog BLOGS = {null} QUESTIONS={null} USER={user} PRACTICE={null}></SpecBlog>
                    
                }


            <div className="profile-right">
                <div className="profile-right-header">
                   
                </div>
                <div>
              

                   
             
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
    
    export default DefaultSearch;