import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { useEffect } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';
import CAPTIONSETUP from './captionsetup';


export const Showupload = ({onSuccess}) => {
    const [files, setFiles] = useState([]);
    const[fname , setfname] = useState([]) ; 
    

    useEffect(()=>
    {
        
        

        let url = 'http://localhost:3000/fileupload/getallimage' ;
        
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
                    setFiles(data)
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
       
            <div className="showing-image">
                    {
                       files&&files.map(image=>
                       (
                           
                      
                            <><div id='capName'>Uploader Name:{image.NAME}</div>
                            
                            <br/>
                            <div id='capImg'> Caption:{image.CAPTION} </div>
                            <br/>
                            <div id='imagecontain'>
                            <img className='indimg' src={"/images/" + image.FILE_NAME} height="500px" width="392px"></img>
                            </div>
                            <div class="class-name"></div>
                            
                            

                            
</>
                       )



                       )
                    }
                </div>
       
    )
};

export default Showupload;