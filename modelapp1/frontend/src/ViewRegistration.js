import React,{useState,useEffect} from "react";
import axios from "axios";
import './ViewRegistration.css';

function ViewRegistration(){
    const [Register,setRegister]=useState('');

    useEffect(()=>{
        const fetchRegistrations=async ()=>{
            try{
                const response=await axios.get('http://localhost:3001/display');
                setRegister(response.data);
                alert("found");
            }
            catch(error){
                alert(error);
                alert("error finding");
            }
        };fetchRegistrations();
    },[]);
    return(
        <div>
            {Register.length>0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>RegisterId</th>
                            <th>ConferenceName</th>
                            <th>ParticipantName</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Register.map((data,index)=>(
                            <tr>
                                <td>{data.RegistrationId}</td>
                                <td>{data.ConferenceName}</td>
                                <td>{data.ParticipantName}</td>
                                <td>{data.Email}</td>
                                <td>{data.Status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<p></p>)}
        </div>
    )
}
export default ViewRegistration;