import { useState } from 'react'
import "../assets/properties.css"
import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
import AddProperty from '../components/AddProperty'
import AddTenant from '../components/AddTenant'
import useModal from '../hooks/useModal' //hooks


const Properties = () => {
    const { modalPanel: addPropertyPanel, modalOverviewStatus: propertyModalOverviewStatus, toggleModal: addPropertyBtn} = useModal()
    const { modalPanel: addTenantPanel, modalOverviewStatus: tenantModalOverviewStatus, toggleModal: addTenantBtn} = useModal()

    const [openPropertyProfilePanel, setopenPropertyProfilePanel] = useState(false)
    const propertySidePanel = openPropertyProfilePanel ? "property-details-container-toggle" : ""
    const propertyModalOverview = openPropertyProfilePanel ? "activeModalOverview" : ""
    
    const openPropertyProfile = () => {
        setopenPropertyProfilePanel(!openPropertyProfilePanel)
    }

    return (
        <>
            {<NavBar />}
            {<AddProperty onPropertyModal={addPropertyPanel} closePropertyModal={addPropertyBtn} />}   {/* Add property modal component */}
            {< AddTenant onTenantModal={addTenantPanel} closeTenantPanel={addTenantBtn} />}

            <div className={`modal-overview ${propertyModalOverview}`} onClick={openPropertyProfile}></div>
            {/* Property Detail profile right side panel */}
            <div className={`property-details-container ${propertySidePanel}`}>
                <div className="property-details-header flex-between">
                    <div>
                        <p style={{letterSpacing: "6px", fontSize: "10px", fontWeight: "bold", color: "var(--text-color)"}}>PROPERTY DETAILS</p>
                        <h2 style={{color: "var(--primary-color)", padding: "3px 0"}}>The Juniper</h2>
                        <p style={{color: "var(--text-color)", fontSize: "13px"}}>18 Juniper Street Lag</p>                        
                    </div>

                    <div><i className="fa fa-close" onClick={openPropertyProfile}></i></div>
                </div>

                <div className="property-detail-status-coun flex-between">
                    <div className="property-detail-status-count-grid">
                        <h3>24</h3>
                        <p>Total Units</p>
                    </div>

                    <div className="property-detail-status-count-grid">
                        <h3>5</h3>
                        <p>Available</p>
                    </div>
                </div>

                <div className='resident-access flex-between'>
                    <h3 style={{color: "var(--text-color)", fontSize: "18px"}}>Resident access</h3>
                    <button type="button" onClick={addTenantBtn}>Add resident</button>
                </div>

                <div className="resident-profile-container">
                    <div className="resident-profile-grid flex-between" style={{color: "var(--text-color)"}}>
                        <div>
                            <h4 style={{color: "var(--primary-color)"}}>Unit A 101</h4>
                            <p style={{fontSize: "12px", margin: "5px 0 10px 0"}}>Jordan Davis</p>
                            <p style={{fontSize: "10px", fontWeight: "500"}}><i className="fa fa-qrcode"></i> <span>RE-2401-8K2M</span></p>                            
                        </div>
                        
                        <div><p className='resident-profile-status'>Active</p></div>
                    </div>

                    <div className="resident-profile-grid flex-between" style={{color: "var(--text-color)"}}>
                        <div>
                            <h4 style={{color: "var(--primary-color)"}}>Unit A 101</h4>
                            <p style={{fontSize: "12px", margin: "5px 0 10px 0"}}>Jordan Davis</p>
                            <p style={{fontSize: "10px", fontWeight: "500"}}><i className="fa fa-qrcode"></i> <span>RE-2401-8K2M</span></p>                            
                        </div>
                        
                        <div><p className='resident-profile-status'>Active</p></div>
                    </div>

                    <div className="resident-profile-grid flex-between" style={{color: "var(--text-color)"}}>
                        <div>
                            <h4 style={{color: "var(--primary-color)"}}>Unit A 101</h4>
                            <p style={{fontSize: "12px", margin: "5px 0 10px 0"}}>Jordan Davis</p>
                            <p style={{fontSize: "10px", fontWeight: "500"}}><i className="fa fa-qrcode"></i> <span>RE-2401-8K2M</span></p>                            
                        </div>
                        
                        <div><p className='resident-profile-status'>Active</p></div>
                    </div>                                        
                </div>
            </div>

            <div className='fixed-width'>
                <div className={`modal-overview ${propertyModalOverviewStatus}`} onClick={addPropertyBtn}></div>
                {
                <PageIntro
                    title='PORTFOLIO'
                    heading='Properties'
                    description='Manage buildings, units, and resident access.'
                    button='Add Property'
                    onAddProperty={addPropertyBtn}
                />
                }

            <div className="property-listing-container">
                <div className="property-listing-grid">
                    <div>
                        <p><i className="fa fa-building"></i></p>
                        <p style={{fontSize: "12px", background: "white", borderRadius: "10px", padding: "3px 10px"}}>19/24 occupied</p>
                    </div>

                    <div>
                        <h3 style={{color: "var(--primary-color)"}}>The Jupital Property</h3>
                        <p style={{fontSize: "13px", color: "var(--text-color)"}}>18 Jupital Stress </p>
                        
                        <div onClick={openPropertyProfile}>
                            <p>2 tenant profiles</p>
                            <p><i className="fa fa-caret-right"></i></p>
                        </div>
                    </div>
                </div>

                <div className="property-listing-grid">
                    <div>
                        <p><i className="fa fa-building"></i></p>
                        <p style={{fontSize: "12px", background: "white", borderRadius: "10px", padding: "3px 10px"}}>19/24 occupied</p>
                    </div>

                    <div>
                        <h3 style={{color: "var(--primary-color)"}}>The Jupital Property</h3>
                        <p style={{fontSize: "13px", color: "var(--text-color)"}}>18 Jupital Stress </p>
                        
                        <div onClick={openPropertyProfile}>
                            <p>2 tenant profiles</p>
                            <p><i className="fa fa-caret-right"></i></p>
                        </div>
                    </div>
                </div>

                <div className="property-listing-grid">
                    <div>
                        <p><i className="fa fa-building"></i></p>
                        <p style={{fontSize: "12px", background: "white", borderRadius: "10px", padding: "3px 10px"}}>19/24 occupied</p>
                    </div>

                    <div>
                        <h3 style={{color: "var(--primary-color)"}}>The Jupital Property</h3>
                        <p style={{fontSize: "13px", color: "var(--text-color)"}}>18 Jupital Stress </p>
                        
                        <div onClick={openPropertyProfile}>
                            <p>2 tenant profiles</p>
                            <p><i className="fa fa-caret-right"></i></p>
                        </div>
                    </div>
                </div>                               
            
                <div className="property-listing-grid">
                    <div>
                        <p><i className="fa fa-building"></i></p>
                        <p style={{fontSize: "12px", background: "white", borderRadius: "10px", padding: "3px 10px"}}>19/24 occupied</p>
                    </div>

                    <div>
                        <h3 style={{color: "var(--primary-color)"}}>The Jupital Property</h3>
                        <p style={{fontSize: "13px", color: "var(--text-color)"}}>18 Jupital Stress </p>
                        
                        <div onClick={openPropertyProfile}>
                            <p>2 tenant profiles</p>
                            <p><i className="fa fa-caret-right"></i></p>
                        </div>
                    </div>
                </div>             
            </div>
            </div>
        </>
    )
}

export default Properties