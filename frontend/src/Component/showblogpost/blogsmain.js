
import Upvote from "./upvotes";
import Savedpost from "./savedpost";
import { useState } from "react";
import { Link} from 'react-router-dom';
import './showb.css';
const BlogsMain = ({ blogs, title}) => {

let nblog = Object.entries(blogs);
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
        
        nblog[1][1].map(blog => (
         
          <div className="blog-preview" id='blogpreview' >

            <div>
         { console.log(blog) }
         <center ><h1 id='title'>{ blog.BLOG_TITLE }</h1>
            <h3 id='title2'>Written by-
              <Link to={'user/'+blog.ID_1 } >
                 {blog.NAME}
              </Link>
              
              </h3>
            <h4>TIME : {blog.TIME}</h4>
            <h4>Category : {blog.CATEGORY}</h4>
            <h5>upvotes : {blog.UPVOTES}</h5>
            </center>
            </div>

            <br></br><br></br><br></br><br></br>
            <p>{ blog.BLOG_CONTENT }</p>
         
          {
            <Upvote BLOG_ID={blog.ID}></Upvote>
          }

          {
            <Savedpost BLOG_ID={blog.ID}></Savedpost>
          }

          

       
            
          
            


          </div>
        ))}
      </div>
    );
  }
   
  export default BlogsMain;