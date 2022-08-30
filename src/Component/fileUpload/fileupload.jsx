import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import axios from 'axios';
import { toast} from 'react-toastify';
import Preview from './preview';
import Showupload from './showuploadedimg';
import './file.css'
import Header2 from '../header2';

export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);
    const[fname , setfname] = useState([]) ; 
    const[nowshow , setns] = useState([]) ; 
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit =async (e) => {
        e.preventDefault();


        // const x={...files} ; 
        // x['FILES'] = files ; 
        // console.log(x) ;
        // console.log(files[0].name)
        const x = new FormData() ; 
        for(let i = 0 ; i<files.length ; i++)
            x.append('file',files[i]);
        console.log(x)

        axios.post('http://localhost:3000/fileupload/upload',x)
        .then((response) => {
            console.log(response.data[0].filename)
            const y = {...fname} ; 
            y['FILE_NAME'] = response.data[0].filename ; 
            setfname(y) ;
            console.log("y : "+ y.FILE_NAME) ; 



            try {
                console.log("sending to addques ques") ;
                fetch('http://localhost:3000/fileupload/save', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(y)
                })
                .then((res)=>{
                    res.json()
                    console.log(res.data) ; 
                })
             
            } catch (error) {
                console.log(error);
            }

            setns(true) ;
            
           
})
        .catch((e) => {
            toast.error('Upload Error')
        })
        setTimeout(() => {
             window.location.reload(false);
        }, 1000);
       
    };

    return (
        <div id='container'>
            <Header2/>
            <label id='label'>Upload Your File </label>
        <form method="post" action="#" id="form" onSubmit={onSubmit}>
            <div className="form-group files">
                
                <input type="file"
                       onChange={onInputChange}
                       className="form-control" id='control'
                       multiple/>
            </div>

            <button id='photo-submit'>Submit</button>
        </form>

        {
            nowshow&&
           <Showupload></Showupload>
        }
</div>
    )
};

export default FileUploader;