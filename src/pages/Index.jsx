import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
function Home () {
  return (
    <>
      {<NavBar />}
      <div className='fixed-width'>
        {
          <PageIntro
            title='Monday, Decem 27, 2024'
            heading='Good morning, Jordan.'
            description='Here is what is happening across your properties today.'
            button='Add Property'
          />
        }

        <div className="analystic-container" style={{padding: "10px 30px"}}>
          <div className='analystic-container-content'>
              <div className='analystic-container-grid'>
                  <div>
                    <h2>3</h2>
                    <i className='far fa-building'></i>
                  </div>
                  <h4>Total Properties</h4>
                  <p>Across your portfolio</p>
              </div>

              <div className='analystic-container-grid'>
                  <div>
                    <h2>82%</h2>
                    <i className='far fa-building'></i>
                  </div>

                  <h4>Occupancy rate</h4>
                  <p>59 of 72 units occupied</p>
              </div>

              <div className='analystic-container-grid'>
                  <div>
                    <h2>334</h2>
                    <i className='far fa-user'></i>
                  </div>

                  <h4>Active Tenants</h4>
                  <p>1 pending activation</p>
              </div>

              <div className='analystic-container-grid'>
                  <div>
                    <h2>23</h2>
                    <i className='far fa-envelope'></i>
                  </div>

                  <h4>Open requests</h4>
                  <p>Need your attention </p>
              </div>
          </div>

        </div>


        <div className="recent-and-activation-grid">
            {/* Recent Request */}
            <div className="recent-request-container">
                <ul>
                    <li>
                        <h5 style={{color: "var(--primary-color)"}}>Recent Requests</h5>
                        <p style={{fontSize: "12px", color: "var(--text-color)", padding: "3px 0"}}>Maintenance activity from your tenants</p>
                    </li>

                    <li style={{fontSize: "11px", color: "var(--primary-color)", fontWeight: "bold"}}>View all</li>
                </ul>

                <div className="recent-request-content">
                    <div className="recent-request-content-grid">
                        <div className="recent-request-content-item">
                            <div><i className="fa fa-wrench pending-status"></i></div>
                            <div className='recent-request-content-data'>
                                <p style={{color: "var(--primary-color)", display: "flex", alignItems: "center"}}><h5>Leakking toilet</h5> <span style={{fontSize: "10px", paddingLeft: "10px"}}>#5040</span></p>
                                <p style={{fontSize: "12px", padding: "5px 0", color: "var(--text-color)"}}>Jordan Davis - Unit A103 - Today 9:42AM</p>
                            </div>
                        </div>
                        <p className="recent-request-status"><span className='pending-status' style={{padding: "5px 10px", borderRadius: "5px"}}>Pending</span></p>
                    </div>

                    <div className="recent-request-content-grid">
                        <div className="recent-request-content-item">
                            <div><i className="fa fa-wrench pending-status"></i></div>
                            <div className='recent-request-content-data'>
                                <p style={{color: "var(--primary-color)", display: "flex", alignItems: "center"}}><h5>Leakking toilet</h5> <span style={{fontSize: "10px", paddingLeft: "10px"}}>#5040</span></p>
                                <p style={{fontSize: "12px", padding: "5px 0", color: "var(--text-color)"}}>Jordan Davis - Unit A103 - Today 9:42AM</p>
                            </div>
                        </div>
                        <p className="recent-request-status"><span className='pending-status' style={{padding: "5px 10px", borderRadius: "5px"}}>Pending</span></p>
                    </div>

                    <div className="recent-request-content-grid">
                        <div className="recent-request-content-item">
                            <div><i className="fa fa-wrench active-status"></i></div>
                            <div className='recent-request-content-data'>
                                <p style={{color: "var(--primary-color)", display: "flex", alignItems: "center"}}><h5>Leakking toilet</h5> <span style={{fontSize: "10px", paddingLeft: "10px"}}>#5040</span></p>
                                <p style={{fontSize: "12px", padding: "5px 0", color: "var(--text-color)"}}>Jordan Davis - Unit A103 - Today 9:42AM</p>
                            </div>
                        </div>
                        <p className="recent-request-status"><span className='active-status' style={{padding: "5px 10px", borderRadius: "5px"}}>Resolved</span></p>
                    </div>
                </div>
            </div>

            {/* Acitvation centre */}
            <div className="activation-centre-container">
                <i className="fa fa-qrcode"></i>
                <p style={{fontSize: "10px", color: "#9dc4a8", fontWeight: "bold", letterSpacing: "2px"}}>ACTIVATION CENTRE</p>
                <h3 style={{color: "#fff", padding: "15px 0"}}>Get a new tenant settled in.</h3>
                <p style={{fontSize: "12px", color: "#9dc4a8", lineHeight: "19px", paddingRight: "35%"}}>Create their profile, print their unique ID on the rent receipt, and let them activate their apartment by scanning its QR sticker.</p>
                <button>Create tenant profile</button>

                <div className="activation-centre-data-count">
                    <div className="activation-centre-data-count-grid">
                        <h3>01</h3>
                        <p>Create</p>
                    </div>

                    <div className="activation-centre-data-count-grid">
                        <h3>02</h3>
                        <p>Print ID</p>
                    </div>

                    <div className="activation-centre-data-count-grid">
                        <h3>03</h3>
                        <p>Activate</p>
                    </div>                    
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
