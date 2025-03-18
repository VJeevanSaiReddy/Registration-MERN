import React,{useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap"
import "./ViewRegistration.css"
function UpdateRegistration(){
    const [RegistrationId,setRegistrationId]=useState('');
    const [status,setStatus]=useState('');

    const handleUpdate=async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3001/update/${RegistrationId}`,{Status:status});
            alert("updated successfully");
        }
        catch(error){
            alert(error);
        }
    }
    return(
        <div>
             <input type="text" placeholder="enter Registration ID" value={RegistrationId} onChange={(e)=>setRegistrationId(e.target.value)} required/>
             <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="registerd">Default</option>
                <option value="registered">Registered</option>
                <option value="cancelled">Cancelled</option>
             </select>
             <Button onClick={handleUpdate}>Update</Button>
        </div>
    );
}
export default UpdateRegistration;