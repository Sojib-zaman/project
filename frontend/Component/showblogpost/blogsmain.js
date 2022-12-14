
import Upvote from "./upvotes";
import Savedpost from "./savedpost";
import { useState } from "react";
import { Link} from 'react-router-dom';
import './showb.css';
const BlogsMain = ({ blogs, title}) => {



const [BLOG_ID , setBLOGID] = useState([]) ; 
const demo = (event)=>
{
 event.preventDefault() ; 

  console.log("in demo")
  //console.log(event.target.name , event.target.value) ;
 
  setBLOGID(event.target.name) ; 
  //console.log(BLOG_ID)
  
  
  const fetchData = async (BLOG_ID) => {
          
    const res = await fetch('http://localhost:3000/proc/blgupvotes',{
      method : 'POST' , body: JSON.stringify(BLOG_ID)
    });
    const data = await res.json();
    
    
    //console.log(data);    
  }      
  fetchData(BLOG_ID)
  .catch(console.error);
 
}


    return (
      <div className="bloglist" id="bloglist">
        <center><h2>{ title }</h2></center>
        {
        
        blogs.map(blog => (
         
          <div className="blog-preview" id='blogpreview' >

            <div>
         { console.log(blog) }
         <h1 id='title69'>{ blog.BLOG_TITLE }</h1>
            <h3 id='title24'>
              
                 {blog.NAME}
              
              
              </h3>

              <div style={{color:"black"}}>
                <h5>TIME : {blog.TIME}</h5>
               
            </div>
            </div>

            <br></br><br></br><br></br><br></br>
            <p>{ blog.BLOG_CONTENT }</p>
         
          {/* {
            <Upvote BLOG_ID={blog.ID}></Upvote>
          }

          {
            <Savedpost BLOG_ID={blog.ID}></Savedpost>
          } */}

          

       
            
          
            


          </div>
        ))}
      </div>
    );
  }
   
  export default BlogsMain;