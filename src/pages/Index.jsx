import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
function Home() {

  return (
    <>
      {<NavBar/>}
      {<PageIntro title='Monday, Decem 27, 2024' heading='Good morning, Jordan.' description='Here is what is happening across your properties today.' button='Add Property' />}
    </>
  )
}

export default Home