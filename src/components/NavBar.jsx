import { useState } from "react";
import "../assets/style.css";
import "../assets/nav.css";
import SidePanel from "./SidePanel";
const NavBar = () => {
    const [panelOpen, setPanelOpen] = useState(false)

    const sidePanel = panelOpen ? 'activeSidePanel' : ''

    const openSidePanel = () => {
        setPanelOpen(!panelOpen)
    }

    return (
        <>
            <SidePanel openSidePanel={openSidePanel} sidePanel={sidePanel} />
            <div className="fixed-width">
                <nav>
                    <ul>
                        <li className="closePanel">
                            <i className="fa fa-bars" style={{ cursor: "pointer"}} onClick={openSidePanel}></i>
                            <div>
                                <h4>Rent Ease</h4>
                                <p>OWNER WORKSPACE</p>
                            </div>
                        </li>

                        <li className='breadcrump' style={{fontSize: "14px", display: "none"}}> <span style={{color: "var(--secondary-color)", padding: "0 10px"}}>Workspace</span>  {"-"} <span style={{color: "var(--primary-color)", padding: "0 10px", fontWeight: "bold"}}> Dashboard</span></li>

                        <li>
                            <i className="fa-regular fa-bell"></i>
                            <p>JD</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar