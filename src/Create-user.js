import { useState } from "react";
import BaseApp from "./AppBase";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function AddUser({user,setUser}){
    const history=useHistory('');

    const [Name,setName]=useState('');
    const [Role,setRole]=useState('');
    const [Experience,setExperience]=useState('');
    const [Email,setEmail]=useState('');
    const [Mobile,setMobile]=useState('');
    const [Blood,setBlood]=useState('');
    const [Salary,setSalary]=useState('');

    const createdUser=()=>{
        const NewUser={
            Name,
            Role,
            Email,
            Experience,
            Mobile,
            Blood,
            Salary
        }
        setUser([...user,NewUser])
        history.push('/users')
    }
    return(
        <BaseApp title="Create an User">
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
                    <label>Mobile Number</label><br></br>
                    <input placeholder="Enter Mobile Number"
                    value={Mobile}
                    onChange={(event)=>setMobile((event.target.value))} required/><br></br>
                    <label>Blood Group</label><br></br>
                    <input placeholder="Enter Blood Group"
                    value={Blood}
                    onChange={(event)=>setBlood((event.target.value))} required/><br></br>
                    <label>Salary(per year)</label><br></br>
                    <input placeholder="Enter Salary in LPA"
                    value={Salary}
                    onChange={(event)=>setSalary((event.target.value))} required/><br></br>
                </form>
                <p><b>Before submitting,Kindly check all the fields are correctly filled</b></p>
                <button className="edit-btn" type="submit" onClick={createdUser}>Create</button>
            </div>
        </BaseApp>
    );
}