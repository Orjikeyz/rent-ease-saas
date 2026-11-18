import "../assets/properties.css"
import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
import AddProperty from '../components/AddProperty'
import usePropertyModal from '../hooks/usePropertyModal' //hooks


const Properties = () => {
    const { addPropertyPanel, modalOverviewStatus, addPropertyBtn} = usePropertyModal()

    return (
        <>
            {<NavBar />}
            {<AddProperty onPropertyModal={addPropertyPanel} closePropertyModal={addPropertyBtn} />}

            <div className="property-details-container">
                
            </div>

            <div className='fixed-width'>
                <div className={`modal-overview ${modalOverviewStatus}`} onClick={addPropertyBtn}></div>
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
                        
                        <div>
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
                        
                        <div>
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
                        
                        <div>
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
                        
                        <div>
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