import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import axios from 'axios';
import { toast} from 'react-toastify';



export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);
    const[fname , setfname] = useState([]) ; 
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
            
           
})
        .catch((e) => {
            toast.error('Upload Error')
        })
    };

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

            <button>Submit</button>
        </form>
    )
};

export default FileUploader;