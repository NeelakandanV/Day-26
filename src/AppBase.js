import { Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function BaseApp({title,children,InfoText}){
    const history=useHistory()
    return(
        <div className="MainParent">
            <div className="InfoZone">
                <h2>User Management System</h2>
            </div>
            <div className="Navigate">
                    <Button onClick={()=>history.push('/')}>Dashboard</Button>
                    <Button onClick={()=>history.push("/users")}>User-Details</Button>
                    <Button onClick={()=>history.push("/create-user")}>Create User</Button>
            </div>
            <div className="Title">
                <h3>{title}</h3>
            </div>
            <div className="Text">
                <p><b>{InfoText}</b></p>
            </div>
            <div className="Content">
                {children}
            </div>
            <div className="Footer">
                <footer>
                    <p>Contact us</p>
                    <p><a href="mailto:usertech@gmail.com">Email :usertech@gmail.com</a></p>
                    <p><a href="tel:+91877****253">Phone :+91877****253</a></p>
                    <p>Fax : 0431-56***55</p>
                </footer>
            </div>
        </div>
    );
}