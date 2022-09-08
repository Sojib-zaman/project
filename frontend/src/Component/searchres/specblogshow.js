import AddAns from '../showanswers/addans';
import ShowAnswer from '../showanswers/show_ans';
import { Link} from 'react-router-dom';
import { useState } from 'react';

const SpecBlog = ({ BLOGS , QUESTIONS  , USER , PRACTICE}) =>
{
  const [name, setName] = useState("");

    let nblog ; 
    let p  ; 
    // if(BLOGS!=null)
    //      p = BLOGS ; 
    // else if(QUESTION!=null)
    //       p = QUESTION ; 
    // else if(USER!=null)
    //       p = USER ;  
    // else if(PRACTICE!=null)
    //       p = PRACTICE ; 
    
  
      return (
        <div id="bloglist_2">
        <center id = "headtitle">{ "WELCOME TO PROJECT FORNAX" }</center>
          {
          BLOGS && BLOGS.map(Question => (
            <div id='bloglist-preview' >
              
            <div id="ques_content">
              <h1>{ Question.BLOG_TITLE }</h1></div>
              <h1>{ Question.BLOG_CONTENT }</h1>
              <h1>{ Question.AUTHOR }</h1>
            </div>
          ))}

          {
          QUESTIONS && QUESTIONS.map(Question => (
            <div id='bloglist-preview' >
              
            <div id="ques_content">
              <h1>{ Question.QUES_CONTENT }</h1></div>
              <h1>{ Question.TIME }</h1>
              <h1>{ Question.CATEGORY }</h1>
            </div>
          ))}
          {
          USER && USER.map(Question => (
            <div id='bloglist-preview' >
              
            <div id="ques_content">
              <h1>{ Question.NAME }</h1></div>
              <h1>{ Question.COUNTRY }</h1>
             
            </div>
          ))}
          {
          BLOGS && BLOGS.map(Question => (
            <div id='bloglist-preview' >
              
            <div id="ques_content">
              
            </div>
            </div>
          ))}
        </div>
      );
    }
     
    export default SpecBlog;