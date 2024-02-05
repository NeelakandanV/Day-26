import { useHistory } from "react-router-dom/cjs/react-router-dom";
import BaseApp from "./AppBase";



export default function Dashboard({user,setUser}){
  const history=useHistory('')

    const deleteUser=(delMail)=>{
      const Listchanged = user.filter((per)=>per.Email!==delMail)
      setUser(Listchanged)
    }

    return(
        <BaseApp 
        title="Welcome to the Employee Management Portal"
        InfoText="(To view Profile or Update Profile,Kindly visit the User-Details Page)">
          <div className="User-Cont">
            {user.map((per,idx)=>(
                <div key={idx} className="userCard">
                    <h4>{per.Name}</h4>
                    <p>Role :{per.Role}</p>
                    <p>Exp :{per.Experience}</p>
                    <a href="mailto:employee@gmail.com">Email :{per.Email}</a><br></br>
                    <button className="view-btn" onClick={()=>history.push(`/profile/${idx}`)}>View</button>
                    <button className="edit-btn" onClick={()=>history.push(`/edit-user/${idx}`)}>Edit</button>
                    <button className="del-btn" onClick={()=>deleteUser(per.Email)}>Delete</button>
                </div>
            ))}
          </div>
        </BaseApp>
    );
}