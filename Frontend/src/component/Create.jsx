import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
    // using state for success or danger msg
    const [displayError, setDisplaError] = useState('')

    // to see the data
    // console.log(name, email, age)

    const [error, setError] = useState('')
    // Creating navigate to redirect to all page after submit details
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault() // to helps stop the by default functionlities of form
        const addUser = { name, email, age }

        const response = await fetch('http://localhost:8000/api/user', {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const result = await response.json()

        if (!response.ok) {
            console.log(result.error);
            setDisplaError('danger')
            setError(result.error)
        }

        if (response.ok) {
            // for pop-up success
            setDisplaError('success')

            // clearing error field
            setError('User created success-fully :)')

            // clearing the input field after submiting the data
            setName('')
            setEmail('')
            setAge(0)

            setTimeout(() => {
                setError('')
                // redirect the all page
                navigate('/all')
            },1000)

            // to check the input details 
            console.log(result);
        }
    }

    return (
        <div className='text-center gap-5'>
            <h1 className='bg-success my-4'>Create User</h1>
            <h4>Enter Your Details</h4>
            {error && <div className={`alert alert-${displayError}`}>{error}</div>}
            <form onSubmit={handleSubmit}>
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

export default Create
