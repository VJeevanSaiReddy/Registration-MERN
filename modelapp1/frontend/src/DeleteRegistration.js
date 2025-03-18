import React,{useState} from "react";
import axios from "axios";
import "./ViewRegistration.css"

function DeleteRegistration(){
    const [RegistrationId,setRegistrationId]=useState('');

    const handleDelete=async ()=>{
        try{
            await axios.delete(`http://localhost:3001/del/${RegistrationId}`);
            alert("deleted succesfully");
        }
        catch(error){
            alert(error.response?.data || error.message)
        }
    }

    return(
        <div>
            <input type="text" placeholder="enter Registration ID" value={RegistrationId} onChange={(e)=>setRegistrationId(e.target.value)} required/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default DeleteRegistration;