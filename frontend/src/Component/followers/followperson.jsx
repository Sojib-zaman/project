
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { Link} from 'react-router-dom';
import Header2 from '../header2';
import './followperson.css'


const FollowNew =  () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[name , setname] = useState('') ; 
    const added_user ={...name}
    added_user['USER_ID']=loggedInUser.ID ; 
    const[userinfo , setuserinfo] = useState({})
    console.log(added_user)
    let a=loggedInUser.ID ;

    const[alluser , setalluser] = useState(null) ; 
    

    useEffect( ()=>
    
    {
        console.log("in use effect getting all the data about my ")

        const getalluser = async ()=>
            {
                console.log("cal")
                try 
                {
                    userinfo['USER_ID'] = a ; 
                    console.log("in try in my followers trying to find followers") ; 
                    const res = await fetch('http://localhost:3000/member/getallusers', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userinfo)
                            
                    })
                
                const data3 = await res.json()  
                console.log("data after notification")
                console.log(data3);
        
                // const newnt = {...notif} ; 
                // newnt['NOTIFY'] = data3.NOTIFY ; 
                // newnt['TIME'] = data3.TIME ; 
                // console.log(newnt) ; 
                setalluser(data3)
                
                
        
        
        
                }
                catch (error) {
                    console.log(error);
                }
            
            }


            getalluser();
         } ,[])
        
       
 
    

        
                
                    
    return (
        <div>
            {console.log(alluser)}
            <Header2/>
        

<div class="ffcontainer">
  <h1 style={{textAlign:"center" , fontSize:"50px"}}>All Active Users</h1>
  <div class="ffmessage-box ff ffmessage-box-style--success">
                <div class="ffmessage-box-inner">
                <span class="ffmessage-box-icon material-icons"></span>
                
                </div>
            </div>
{
alluser&&
    alluser.map(q => (
            <div class="ffmessage-box ff ffmessage-box-style--success">
                <div class="ffmessage-box-inner">
                <span class="ff-message-box-icon material-icons"></span>
                <span class="ff-message-box-text">
                    <div className='st'>
                    <img style={{float:"left"}} src = {q.IMAGE} width="50px" height="50px"></img>
                   <p >  { <Link style={{ paddingLeft : "30px" , textDecoration : "none" }} to={"/showblogs/user/"+q.ID } > {q.NAME} </Link>} </p>
                   </div>
                </span>
                </div>
            </div>
    ))
     
}
 

  

</div>
</div>

    )}
    ;

    export default FollowNew;