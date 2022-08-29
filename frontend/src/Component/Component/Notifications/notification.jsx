
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { Link} from 'react-router-dom';
import Header2 from '../header2';
import './notification.css'


const Notification =  () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[name , setname] = useState('') ; 
    const added_user ={...name}
    added_user['USER_ID']=loggedInUser.ID ; 
    const[userinfo , setuserinfo] = useState({})
    console.log(added_user)
    let a=loggedInUser.ID ;

    const[notif , setnotif] = useState(null) ; 
    

    useEffect( ()=>
    
    {
        console.log("cal")

        const getntdata = async ()=>
            {
                console.log("cal")
                try 
                {
                    userinfo['USER_ID'] = a ; 
                    console.log("in try in notifications checking for available notifications") ; 
                    const res = await fetch('http://localhost:3000/member/getnotifications', {
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
                setnotif(data3)
                
                
        
        
        
                }
                catch (error) {
                    console.log(error);
                }
            
            }


            getntdata();
         } ,[])
        
       
 
    

        
                
                    
    return (
        <div>
            {console.log(notif)}
            <Header2/>
        

<div class="vcv-container">
  <h1>Notifications</h1>
  <div class="vce-message-box vce vce-message-box-style--success">
                <div class="vce-message-box-inner">
                <span class="vce-message-box-icon material-icons"></span>
                <span class="vce-message-box-text">
                    <p>{}</p>
                </span>
                </div>
            </div>
{notif&&
    notif.map(q => (
            <div class="vce-message-box vce vce-message-box-style--success">
                <div class="vce-message-box-inner">
                <span class="vce-message-box-icon material-icons"></span>
                <span class="vce-message-box-text">
                    <p>{q.NOTIFY}</p>
                </span>
                </div>
            </div>
    ))
     
}
 

  

</div>
</div>

    )}
    ;

    export default Notification;