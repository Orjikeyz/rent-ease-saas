import { Link} from "react-router";
import { NavLink } from 'react-router'

const SidePanel = ({openSidePanel, sidePanel}) => {
    return (
        <>
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
                            <p className="closePanel" style={{padding: "10px 13px", cursor: "pointer"}} onClick={openSidePanel}><i className="fa fa-x"></i></p>
                        </li>
                    </ul>
                </nav>

                <ul className="side-panel-ul"> 
                    <NavLink to="/" end>
                        <li><i className="fa fa-people-roof"></i> <p>Dashboard</p></li>
                    </NavLink>

                    <NavLink to="/properties">
                        <li><i className="fa-regular fa-building"></i> <p>Properties</p></li>
                    </NavLink>

                    <NavLink to="/tenants">
                        <li><i className="fa-regular fa-user"></i> <p>Tenants</p></li>
                    </NavLink>

                    <NavLink to="/notifications">
                        <li><i className="fa-regular fa-bell"></i> <p>Notification</p></li>
                    </NavLink>

                    <NavLink to="/reports">
                        <li><i className="fa-regular fa-file"></i> <p>Report</p></li>
                    </NavLink>
                </ul>

                <div className="side-panel-footer">
                    <ul className="side-panel-ul"> 
                        <Link to=""><li><i className="fa fa-wrench"></i> <p>Settings</p></li></Link>
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

export default SidePanel