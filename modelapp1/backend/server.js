const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Registrations')
.then(()=>console.log("Connected to MOngoDB"))
.catch((error)=>console.log("error"));
const RegistrationSchema=new mongoose.Schema({
    RegistrationId:{type:String,unique:true},
    ConferenceName:String,
    ParticipantName:String,
    Email:{type:String},
    Status:{type:String,default:"registered"}
});
const Registration =new mongoose.model('Registration',RegistrationSchema);
app.post('/adding',async (req,res)=>{
    const RegisterData=req.body;
    try{
        const register=new Registration(RegisterData);
        register.save();
        res.status(200).send("Successfully Registered");
    }
    catch(error){
        res.status(400).send("error in Registration");
    }
});
app.get('/display',async (req,res)=>{
    try{
        const registers=await Registration.find();
        if(registers){
            res.status(200).json(registers);
        }
        else{
            res.status(404).send("not found");
        }
    }
    catch(error){
        res.status(400).send("error finding");
    }
});
app.delete('/del/:RegistrationId',async (req,res)=>{
    try{
        const register= await Registration.findOneAndDelete({RegistrationId:req.params.RegistrationId});
        if(register){
            res.status(200).send("deleted successfully");
        }
        else{
            res.status(404).send("not found");
        }
    }
    catch(error){
        res.status(400).send("error");
    }
});
app.put('/update/:RegistrationId',async (req,res)=>{
    try{
        const register=await Registration.findOneAndUpdate({RegistrationId:req.params.RegistrationId},
            {Status:req.body.Status},
            {new:true}
        )
        if(register){
            res.status(200).send("updated successfully");
        }
        else{
            res.status(404).send("not found");
        }
    }
    catch(error){
        res.status(400).send("error");
    }
});
const PORT=3001;
app.listen(PORT,()=>console.log(`server connected to ${PORT}`));