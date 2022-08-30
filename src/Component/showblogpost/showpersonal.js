
const PersonalBlogList = ({ blogs, title}) => {
    console.log("here")
  
  
      return (
        <div className="blog-list" id="pcon">
          <center><h2>{ title }</h2></center>
          {
          
        blogs.map(blog => (
          <div className="blog-preview" id="xx" >
            {console.log(blog.BLOG_TITLE)}
              <center><h1>{ blog.BLOG_TITLE }</h1>
             
              <h4>TIME : {blog.TIME}</h4>
              
              </center>
  
              <div className="bl-con-font">{ blog.BLOG_CONTENT }</div>
              {console.log("error")}
             {/* {
              <ShowComments blog_name = {blog.ID}></ShowComments>
             }  */}
  
              
  
  
            </div>
          ))}
        </div>
      );
    }
     
    export default PersonalBlogList;