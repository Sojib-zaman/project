import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { useEffect } from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';



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
                       
                        
                            <img className='indimg' src = {"/images/"+ image.FILE_NAME} height="500px" width="392px"></img>

                            

                       )



                       )
                    }
                </div>
       
    )
};

export default Showupload;