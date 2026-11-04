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
      </div>
    </>
  )
}

export default Home
