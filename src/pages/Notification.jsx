import { useState } from 'react'
import "../assets/notification.css"
import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
import AddNotification from '../components/AddNotification'
import useModal from '../hooks/useModal' //hooks


const Notification = () => {

    const { modalPanel: addNotificationPanel, modalOverviewStatus: modalOverviewStatus, toggleModal: addNotificationBtn} = useModal()
    return (
        <>
            {<NavBar />}

            {<AddNotification onNotificationModal={addNotificationPanel} closeNotificationPanel={addNotificationBtn} />}

            <div className="fixed-width">
                {<PageIntro
                        title='Resident communications'
                        heading='Notifications'
                        description='Keep residents informed across one or all properties.'
                        button='Post Notification'
                        onAddProperty={addNotificationBtn}
                    />}   
                <div className={`modal-overview ${modalOverviewStatus}`} onClick={addNotificationBtn}></div>
                <div className="notification-container">
                    <div className="notification-container-grid flex-between">
                        <div className='flex-between'>
                            <i className="fa-regular fa-bell"></i>
                            <div style={{paddingLeft: "12px"}}>
                                <h4>Water service maintenance</h4>
                                <p>Sent to The Juniper - May 24, 2020</p>
                            </div>
                        </div>

                        <p className='notification-post-status'>Published</p>
                    </div>  

                    <div className="notification-container-grid flex-between">
                        <div className='flex-between'>
                            <i className="fa-regular fa-bell"></i>
                            <div style={{paddingLeft: "12px"}}>
                                <h4>Water service maintenance</h4>
                                <p>Sent to The Juniper - May 24, 2020</p>
                            </div>
                        </div>

                        <p className='notification-post-status'>Published</p>
                    </div>  

                    <div className="notification-container-grid flex-between">
                        <div className='flex-between'>
                            <i className="fa-regular fa-bell"></i>
                            <div style={{paddingLeft: "12px"}}>
                                <h4>Water service maintenance</h4>
                                <p>Sent to The Juniper - May 24, 2020</p>
                            </div>
                        </div>

                        <p className='notification-post-status'>Published</p>
                    </div>                                                               
                </div>
        </div>
        </>
    )
}

export default Notification