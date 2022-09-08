
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { Link} from 'react-router-dom';
import Header2 from '../header2';
import './myfollowers.css'


const MyFollowers =  () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[name , setname] = useState('') ; 
    const added_user ={...name}
    const[showf , setss] = useState('')  ;
    added_user['USER_ID']=loggedInUser.ID ; 
    const[userinfo , setuserinfo] = useState({})
    console.log(added_user)
    let a=loggedInUser.ID ;

    const[followerlist , setfollowerlist] = useState(null) ; 
    

    useEffect( ()=>
    
    {
        console.log("in use effect getting all the data about my followers")

        const getfollowdata = async ()=>
            {
                console.log("cal")
                try 
                {
                    userinfo['USER_ID'] = a ; 
                    console.log("in try in my followers trying to find followers") ; 
                    const res = await fetch('http://localhost:3000/member/getfollowers', {
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
                setfollowerlist(data3)
                
                
        
        
        
                }
                catch (error) {
                    console.log(error);
                }
            
            }


            getfollowdata();








            
        const FCOUNT = async ()=>
        {
            console.log("cal")
            try 
            {
                const b={...userinfo} ; 
                b['USER_ID'] = loggedInUser.ID ; 
                
                console.log("in try in my followers trying to find followers") ; 
                const res = await fetch('http://localhost:3000/member/fcount', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(b)
                        
                })
            
            const data3 = await res.json()  
           
            console.log(data3.outBinds.RET);
    
            // const newnt = {...notif} ; 
            // newnt['NOTIFY'] = data3.NOTIFY ; 
            // newnt['TIME'] = data3.TIME ; 
            // console.log(newnt) ; 
            
            setss(data3.outBinds.RET)
            console.log("woir ifh h" + data3.outBinds.RET)
    
    
    
            }
            catch (error) {
                console.log(error);
            }
        
        }
        FCOUNT() ;
    



         } ,[])
        
       
 
    

        
                
                    
    return (
        <div>
            {console.log(followerlist)}
            <Header2/>
        

<div class="ffcontainer">
  <h1 style={{textAlign:"center" , fontSize:"50px"}}>MY FOLLOWERS</h1>
  <div class="ffmessage-box ff ffmessage-box-style--success">
                <div class="ffmessage-box-inner">
                <span class="ffmessage-box-icon material-icons"></span>
                
                </div>
            </div>
        <div>{showf} people are currently following you</div>
{
followerlist&&
    followerlist.map(q => (
            <div class="ffmessage-box ff ffmessage-box-style--success">
                <div class="ffmessage-box-inner">
                <span class="ff-message-box-icon material-icons"></span>
                <span class="ff-message-box-text">
                    <div className='st'>
                    <img style={{float:"left"}} src = {q.IMAGE} width="50px" height="50px"></img>
                   <p >  { <Link to={"/showblogs/user/"+q.FOLLOWER } > {q.NAME} </Link>} </p>
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

    export default MyFollowers;