const Answerlist = ({answer  }) => {
    //console.log(answer) ; 
   
      return (
        <div id="tot-ans">
          
          {
            answer.map((ans)=>{
             // console.log(ans.ANS_CONTENT) ; 
              return<div className="answer-list" >
               <h2 style={{backgroundColor:"#84ed5e" ,color:"beige", width:"300px" ,padding:"2px" ,margin:"1px"}}>Answered by {ans.NAME}</h2>
                <h2>Time : {ans.TIME}</h2>
                <h2 style={{fontFamily: "Montserrat ,sans-serif",padding:"0px" ,marginLeft:"2px" , paddingBottom:"20px"}}>{ans.ANS_CONTENT}</h2>
                      </div>
            
            }
            )
          }
         
        </div>
      );
    }
     
    export default Answerlist;