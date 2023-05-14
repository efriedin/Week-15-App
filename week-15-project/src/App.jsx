import './App.css'
import Table from './components/Table'
import { useEffect } from 'react'
import { useState } from 'react'


function App() {

  const MOCK_API_URL = 'https://643efbc0b9e6d064beec702e.mockapi.io/'
  const [users, setUsers] = useState([{
    name: "",
    jobTitle: "",
    companyName: "",
  }])

  useEffect(() => {
    fetch(MOCK_API_URL)
    .then((data) => data.json())
    .then((data) => console.log(data))
    .then((data) => setUsers(data))
  }, [])

  const getUsers = () => {
    console.log(`doing get users function`)

    fetch(MOCK_API_URL)
    .then((data) => data.json())
    .then((data) => setUsers(data))
  }

  // const postUser = () => {

  // }

  // const deleteUser = () => {

  // }

  // const updateUser = () => {

  // }

  return (
    <div className='App'>
      <Table />
    </div>
  )
}

export default App
