import { useEffect, useState } from "react";
import BaseApp from "./AppBase";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export default function EditUser({user,setUser}){
    const history=useHistory('');
    const {id}=useParams();
    let UserDat = user[id]

    const [Name,setName]=useState('');
    const [Role,setRole]=useState('');
    const [Experience,setExperience]=useState('');
    const [Email,setEmail]=useState('');

    useEffect(()=>{
        setName(UserDat.Name)
        setRole(UserDat.Role)
        setExperience(UserDat.Experience)
        setEmail(UserDat.Email)
    },[])

    const updateUser=()=>{
        const ExistUser={
            Name,
            Role,
            Email,
            Experience,
        }
        user[id]=ExistUser;
        setUser([...user])
        history.push('/')
    }
    return(
        <BaseApp title="Edit User Profile">
            <div className="AddUser">
                <form type='submit'>
                    <label>Name</label><br></br>
                    <input placeholder="Enter Name"
                    value={Name}
                    onChange={(event)=>setName(event.target.value)} required/><br></br>
                    <label>Designation</label><br></br>
                    <input placeholder="Enter Designation"
                    value={Role}
                    onChange={(event)=>setRole((event.target.value))} required/><br></br>
                    <label>Email</label><br></br>
                    <input placeholder="Enter Email"
                    value={Email}
                    type='email'
                    onChange={(event)=>setEmail((event.target.value))} required/><br></br>
                    <label>Experience</label><br></br>
                    <input placeholder="Enter Experience in years"
                    value={Experience}
                    onChange={(event)=>setExperience((event.target.value))} required/><br></br>
                </form>
                <p><b>Before submitting,Kindly check all the fields are correctly filled</b></p>
                <button className="edit-btn" type="submit" onClick={updateUser}>Update</button>
            </div>
        </BaseApp>
    );
}