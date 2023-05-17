import React from 'react'

const Form = ({
    postUser, 
    handleName, 
    handleJobTitle, 
    handleCompanyName
}) => {
  return (
    <form onSubmit={(e) => postUser(e)} className='myForm'>
        <h3>Post New User</h3>
        <label>Name</label>
        <input onChange={(e) => handleName(e.target.value)}></input>
        <label>Job Title</label>
        <input onChange={(e) => handleJobTitle(e.target.value)}></input>
        <label>Company</label>
        <input onChange={(e) => handleCompanyName(e.target.value)}></input>
        <button className='form-btn'>submit</button>
    </form>
  )
}

export default Form