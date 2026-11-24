const AddTenant = ({onTenantModal, closeTenantPanel}) => {
    const tenantModalOverview = onTenantModal ? "activeModalOverview2" : ""
    return (
        <>
        <div className={`modal-overview ${tenantModalOverview}`}></div>
            <div className={`tenant-modal-container ${onTenantModal}`}>
                <div className="tenant-modal-header">
                    <div>
                        <p style={{fontSize: "10px", letterSpacing: "2px", color: "var(--text-color)"}}>ACTIVATION WORKFLOW</p>
                        <h2 style={{color: "var(--primary-color)"}}>Create Tenant Profile</h2>
                    </div>
                    <div><i className="fa fa-close" onClick={closeTenantPanel}></i></div>
                </div>

                <div className="tenant-modal-info" >
                    <i className='fa fa-qrcode' ></i>
                    <p style={{fontSize: "12px", margin: "4px 0"}}><b>Unique ID workflow</b></p>
                    <p style={{fontSize: "12px"}}>The tenant ID is generated after saving. Print it on the rent receipt, then the tenant scans their apartment QR sticker to activate access for one year</p>
                </div>

                <label htmlFor="tenant_name">Full Name</label>
                <input type="text" id="tenant_name" placeholder='e.g. The Jupiter' />

                <div className="tenant-input-grid">
                    <div>
                        <label htmlFor="tenant_phone">Phone</label>
                        <input type="text" id="tenant_phone" placeholder='+234...' />            
                    </div>

                    <div>
                        <label htmlFor="tenant_email">Email</label>
                        <input type="text" id="tenant_email" placeholder='example@gmail.com'/>    
                    </div>    
                </div>


                <div className="tenant-input-grid">
                    <div>
                        <label htmlFor="apartment_unit">Apartment / unit</label>
                        <input type="text" id="apartment_unit" placeholder='A101'/>
                    </div>

                    <div>
                        <label htmlFor="property">Property</label>
                        <select id='property'>
                            <option value="">Select Property</option>
                            <option value="jupital">Jupital Property</option>
                            <option value="pluto">Pluto Property</option>
                        </select>
                    </div>                    
                </div>


                <button type="button"><i className="fa fa-shield"></i> <b>Generate unique tenant ID</b></button>
                
            </div>         
        </>
    )
}

export default AddTenant