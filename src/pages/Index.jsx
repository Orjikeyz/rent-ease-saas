import NavBar from '../components/NavBar'
import useFetch from '../hooks/useFetch'
function Home() {
let {users, setUsers} = useFetch("https://jsonplaceholder.typicode.com/users ")



const deleteBtn = (id) => {
  const newUsers = users.filter(user => user.id !== id) 
  setUsers(newUsers)
  console.log( id)
}

  return (
    <>
      {users && <NavBar userData={users} deleteBtn={deleteBtn}  />}
    </>
  )
}

export default Home