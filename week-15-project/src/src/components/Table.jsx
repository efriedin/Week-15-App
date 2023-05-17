import React from 'react'

const Table = ({user, deleteUser, updateUser, handleUpdatedName}) => {
  return (
    <table className='myTable'> 
      <caption className='table-cap'>My Table</caption>
      <thead>
      <tr>
        <th className='table-header'>Full Name</th>
        <th className='table-header'>Job Title</th>
        <th className='table-header'>Company</th>
        <th className='table-header'>Delete User</th>
      </tr>
      </thead>
      <tbody>
        {user.map((user, index) => (
          <tr key={index}>
            <td className='table-data'>{user.name}</td>
            <td className='table-data'>{user.job}</td>
            <td className='table-data'>{user.companyName}</td>
            <td className='table-data'>
              <button onClick={() => deleteUser(user.id)}>X</button>
            </td>
            <td className='table-data'>
              <input onChange = {(e) => handleUpdatedName(e.target.value)} placeholder='enter new name'></input>
              <button onClick={(e) => updateUser(user)}>+</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table