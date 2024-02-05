import { useHistory } from "react-router-dom/cjs/react-router-dom";
import BaseApp from "./AppBase";
import { Button } from "react-bootstrap";

 export default function NoPage(){
    const history = useHistory()
    return(
        <BaseApp>
        <div className="NoPage">
            <h3>404 PAGE NOT FOUND</h3>
            <Button onClick={()=>history.push('/')}>⬅️Dashboard</Button>
        </div>
        </BaseApp>
    );
 }