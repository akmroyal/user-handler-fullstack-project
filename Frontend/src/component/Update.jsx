import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [displayError, setDisplaError] = useState('')

  // to see the data
  // console.log(name, email, age)

  const [error, setError] = useState('')

  // use for taking id from url 
  const { id } = useParams()

  // function for getting single user Only
  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:8000/api/user/${id}`)

    const result = await response.json()

    if (!response.ok) {
      console.log(result.error)
      setDisplaError('danger')
      setError(result.error)
    }

    if (response.ok) {
      // setError('User updated successfully', result)
      setError('')
      console.log("updated user ", result);

      // setting the data to take input field
      setName(result.name)
      setEmail(result.email)
      setAge(result.age)
    }
  }

  // to getting data we need to render one time 
  useEffect(() => {
    getSingleUser()
  }, [])

  //using navigate to redirect all user page
  const navigate = useNavigate()

  // now submit after updating data 
  const handleUpdateUser = async (e) => {
    e.preventDefault()

    // from useState
    const updatedUser = { name, email, age }


    const response = await fetch(`http://localhost:8000/api/user/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const result = await response.json()

    if (!response.ok) {
      console.log(result.error)
      setDisplaError('danger')
      setError(result.error)
    }

    if (response.ok) {
      setDisplaError('success')
      setError('User details updated successfully :)')
      setTimeout(() => {
        setError('')
        navigate('/all')
      }, 1000)
      console.log("Update successfully");

    }
  }


  return (
    <div className='text-center'>
      <h1 className='bg-success'>Edit your details</h1>
      {error && <div className={`alert alert-${displayError}`}>{error}</div>}
      <form onSubmit={handleUpdateUser}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="emailHelp"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Update
