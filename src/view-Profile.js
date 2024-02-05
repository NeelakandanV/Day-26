import { useParams } from "react-router-dom/cjs/react-router-dom";
import BaseApp from "./AppBase";

export default function ViewProfile({user,setUser}){
    const {id}=useParams();
    let profile = user[id];
    
    return(
        <BaseApp title="User Profile">
            <div className="User-Profile">
                <h4>Name : {profile.Name}</h4>
                <p>Role : {profile.Role}</p>
                <p>Experience : {profile.Experience}</p>
                <p>Email : <a>{profile.Email}</a></p>
                <p>Mobile : {profile.Mobile}</p>
                <p>Blood Group : {profile.Blood}</p>
                <p>Salary : {profile.Salary}</p>
            </div>
        </BaseApp>
    );
}