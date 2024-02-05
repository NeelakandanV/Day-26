import { Nav } from "react-bootstrap";

export default function BaseApp({title,children,InfoText}){
    return(
        <div className="MainParent">
            <div className="InfoZone">
                <h2>User Management System</h2>
            </div>
            <div className="Navigate">
                <Nav className="justify-content-center" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/">Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/users">User-Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/create-user">Create User</Nav.Link>
                  </Nav.Item>
                </Nav>
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