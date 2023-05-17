import './App.css'
import Table from './components/Table'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from './components/Form'


function App() {

  const MOCK_API_URL = 'https://643efbc0b9e6d064beec702e.mockapi.io/articles'

  const [user, setUser] = useState([
    {
    name: "",
    job: "",
    companyName: "",
    },
  ])

  const [newUser, setNewUser] = useState ({
    name: '',
    job: '',
    companyName: '',
  })

  const [updatedName, setUpdatedName] = useState ('')

  function handleUpdatedName(updatedNameValue){
    console.log(updatedNameValue)
    setUpdatedName(updatedNameValue)
  }

  function handleName (nameValue) {
    setNewUser({
      ...newUser,
      name: nameValue
    })
    
  }

  function handleJobTitle (jobValue) {
    setNewUser({
      ...newUser,
      job: jobValue
    })
    
  }

  function handleCompanyName (companyValue) {
    setNewUser({
      ...newUser,
      companyName: companyValue
    })
    
  }

  useEffect(() => {
    fetch(MOCK_API_URL)
    .then((data) => data.json())
    .then((data) => setUser(data))
  }, [])

  const getUser = () => {
    console.log(`doing getUser function`)

    fetch(MOCK_API_URL)
    .then((data) => data.json())
    .then((data) => setUser(data))
  }
 
  const postUser = (e) => {
    e.preventDefault()
    console.log('doing postUser...')  

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser),
    }).then(() => getUser())
  }

  const deleteUser = (id) => {
    console.log(id)
    console.log('Deleting user...')

    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getUser())
  }

  const updateUser = (user) => {
    console.log('Updating user name...')
    let updatedUser = user
      updatedUser.name = updatedName
      console.log(updateUser)
    fetch(`${MOCK_API_URL}/${user.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateUser)
    }).then(() => getUser())
  }

  return (
    <div className='App'>
      <Form 
        postUser = {postUser}
        handleName = {handleName}
        handleJobTitle = {handleJobTitle}
        handleCompanyName = {handleCompanyName}
      />
      <Table 
        handleUpdatedName={handleUpdatedName}
        updateUser={updateUser}
        deleteUser = {deleteUser}
        user = {user}
      />
    </div>
  )
}

export default App
