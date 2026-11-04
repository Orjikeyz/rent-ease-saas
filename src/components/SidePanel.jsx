import { Link} from "react-router";

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
                    <Link to=""><li><i className="fa-regular fa-home"></i> <p>Dashboard</p></li></Link>
                    <Link to=""><li><i className="fa-regular fa-building"></i> <p>Properties</p></li></Link>
                    <Link to=""><li><i className="fa-regular fa-user"></i> <p>Tenants</p></li></Link>
                    <Link to=""><li><i className="fa-regular fa-bell"></i> <p>Notification</p></li></Link>
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

export default SidePanel