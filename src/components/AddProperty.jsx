
const AddProperty = ({onPropertyModal, closePropertyModal}) => {

    return (
        <>
            <div className={`property-modal-container ${onPropertyModal}`}>
                <div className="property-modal-header">
                    <div>
                        <p style={{fontSize: "10px", letterSpacing: "2px", color: "var(--text-color)"}}>PORTFOLIO SETUP</p>
                        <h2 style={{color: "var(--primary-color)"}}>Add Property</h2>
                    </div>
                    <div><i className="fa fa-close" onClick={closePropertyModal}></i></div>
                </div>

                <label htmlFor="property_name">Property Name</label>
                <input type="text" id="property_name"/>
                
                <label htmlFor="property_address">Address</label>
                <input type="text" id="address"/>

                <label htmlFor="number_of_apartment">Number of Apartments</label>
                <input type="text" id="number_of_apartment"/>

                <button type="button">Create Property</button>

            </div>
        </>
    )
}

export default AddProperty