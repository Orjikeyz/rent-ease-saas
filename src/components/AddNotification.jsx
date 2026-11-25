
const AddNotification = ({onNotificationModal, closeNotificationPanel}) => {

    return (
        <>
            <div className={`property-modal-container ${onNotificationModal}`}>
                <div className="property-modal-header">
                    <div>
                        <p style={{fontSize: "10px", letterSpacing: "2px", color: "var(--text-color)"}}>RESIDENT COMMUNICATIONS</p>
                        <h2 style={{color: "var(--primary-color)"}}>Post Notification</h2>
                    </div>
                    <div><i className="fa fa-close" onClick={closeNotificationPanel}></i></div>
                </div>

                <label htmlFor="notification_title">Message Titile</label>
                <input type="text" id="notification_title" placeholder='Water service maintenance...' />
                
                    <label htmlFor="property">Audience</label>
                    <select id='property'>
                        <option value="">Select Residence</option>
                        <option value="jupital">Jupital Property</option>
                        <option value="pluto">Pluto Property</option>
                    </select>

                <button type="button" style={{fontWeight: "bold"}}><i className="far fa-paper-plane"></i> Publish Notification </button>

            </div>
        </>
    )
}

export default AddNotification