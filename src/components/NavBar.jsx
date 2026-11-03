import { use, useState } from "react";
import { Link} from "react-router";
import "../assets/style.css";
import "../assets/nav.css";
const NavBar = () => {
    const [panelOpen, setPanelOpen] = useState(false)

    const sidePanel = panelOpen ? "activeSidePanel" : "";

    const openSidePanel = () => {
        setPanelOpen(!panelOpen);
    }

    return (
        <>
            <nav onClick={openSidePanel}>
                <ul>
                    <li>
                        <i className="fa fa-bars" onClick={openSidePanel}></i>
                        <div>
                            <h4>Rent Ease</h4>
                            <p>OWNER WORKSPACE</p>
                        </div>
                    </li>

                    <li>
                        <i className="fa-regular fa-bell"></i>
                        <p>JD</p>
                    </li>
                </ul>
            </nav>

            <div className={`side-panel-container ${sidePanel}`}>
                <nav>
                    <ul>
                        <li>
                            <div>
                                <h4>Rent Ease</h4>
                                <p>OWNER WORKSPACE</p>
                            </div>
                        </li>

                        <li>
                            <p style={{padding: "10px 13px"}} onClick={openSidePanel}><i className="fa fa-x"></i></p>
                        </li>
                    </ul>
                </nav>

                <ul className="side-panel-ul"> 
                    <Link to=""><li><i className="material-icons">home</i> <p>Dashboard</p></li></Link>
                    <Link to=""><li><i className="material-icons">apartment</i> <p>Properties</p></li></Link>
                    <Link to=""><li><i className="material-icons">group</i> <p>Tenants</p></li></Link>
                    <Link to=""><li><i className="material-icons">notifications</i> <p>Notification</p></li></Link>
                    <Link to=""><li><i className="material-icons">analytics</i> <p>Report</p></li></Link>
                </ul>

                <div className="side-panel-footer">
                    <ul className="side-panel-ul"> 
                        <Link to=""><li><i className="material-icons">settings</i> <p>Settings</p></li></Link>
                    </ul>
                    <ul className="side-panel-footer-bottom">
                        <li>
                            <p>JD</p>
                            <div>
                                <h4 style={{fontSize: "14px"}}>Jordan Davis</h4>
                                <p style={{fontSize: "12px", padding: "5px 0", color: "var(--secondary-color)"}}>Property Owner</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar