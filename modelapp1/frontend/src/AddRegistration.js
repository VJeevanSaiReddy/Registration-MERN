import React,{useState} from "react";
import axios from "axios";
import {Form,Button} from "react-bootstrap";
import "bootstrap/css/bootstrap.min.css";
import "./ViewRegistration.css"



function AddRegistration(){
    const [Register,setRegister]=useState({
        RegistrationId:'',
        ConferenceName:'',
        ParticipantName:'',
        Email:''
    });

    const handleChange= (e)=>{
        const {name,value}=e.target;
        setRegister({...Register,[name]:value});
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/adding',Register);
            alert("Succesfully Registered");
        }
        catch(error){
            alert(error);
            alert("Error Registering");
        }
        setRegister({
            RegistrationId:'',
            ConferenceName:'',
            ParticipantName:'',
            Email:''
        })
    }
    return(<Form onSubmit={handleSubmit}>
        <Form.Group><Form.Control type="text" placeholder="RegistrationId " value={Register.RegistrationId} name="RegistrationId" onChange={handleChange} required/></Form.Group>
        <Form.Group><Form.Control type="text" placeholder="ConferenceName " value={Register.ConferenceName} name="ConferenceName" onChange={handleChange} required/></Form.Group>
        <Form.Group><Form.Control type="text" placeholder="ParticipantName " value={Register.ParticipantName} name="ParticipantName" onChange={handleChange} required/></Form.Group>
        <Form.Group><Form.Control type="email" placeholder="Email " value={Register.Email} name="Email" onChange={handleChange} required/></Form.Group>
        <Button type="submit">Register</Button>
    </Form>);
}
export default AddRegistration;