import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
      async function getWealther () {
        try {
          const response = await fetch(url)
          if (!response.ok) {
            return console.log('error getting data')
          }
          const data = await response.json()
          // console.log('Data fetched successufly: ' + data)
          setUsers(data)
        } catch (error) {
          console.log('sorry an error occurred:' + error)
        }
      }
      getWealther()
  }, [url])

  return { users, setUsers }
}
export default useFetch
