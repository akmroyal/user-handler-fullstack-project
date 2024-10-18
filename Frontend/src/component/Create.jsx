import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
    const [avatar, setAvatar] = useState(null)
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [twitter, setTwitter] = useState("")
    // using state for success or danger msg
    const [displayError, setDisplaError] = useState('')

    // to see the data
    // console.log(name, email, age)

    const [error, setError] = useState('')
    // Creating navigate to redirect to all page after submit details
    const navigate = useNavigate()

    // handling the submit functionalites
    const handleSubmit = async (e) => {
        e.preventDefault() // to helps stop the by default functionlities of form
        // const addUser = {
        //     name,
        //     email,
        //     age,
        //     avatar,
        //     socialLinks: {
        //         facebook,
        //         instagram,
        //         linkedin,
        //         twitter
        //     }
        // }
        if (!name || !email || !age) {
            setDisplaError('danger')
            setError('Name, email, and age are required.');
            return
        }

        const formData = new FormData()
        formData.append('name', name);
        formData.append('email', email);
        formData.append('age', age);
        formData.append('avatar', avatar); // Appending file
        formData.append('socialLinks[facebook]', facebook);
        formData.append('socialLinks[instagram]', instagram);
        formData.append('socialLinks[linkedin]', linkedin);
        formData.append('socialLinks[twitter]', twitter);


        const response = await fetch('http://localhost:8000/api/user', {
            method: "POST",
            // body: JSON.stringify(addUser),
            body: formData, // sending data's in form type
            // headers: {
            //     "Content-Type": "application/json",
            // }
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
            setAvatar(null)
            setInstagram('')
            setLinkedin('')
            setTwitter('')
            setFacebook('')

            setTimeout(() => {
                setError('')
                // redirect the all page
                navigate('/all')
            }, 1000)

            // to check the input details 
            console.log(result);
        }
    }

    const handleFileData = (e) => {
        setAvatar(e.target.files[0]) // storing the file in state
    }

    return (
        <div className='text-center gap-5'>
            <h1 className='bg-success my-4'>Create User</h1>
            <h4>Enter Your Details</h4>
            {error && <div className={`alert alert-${displayError}`}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Avatar</label>
                    <input
                        type="file"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleFileData}
                    />
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
                    <label className="form-label">LinkedIn Profile</label>
                    <input
                        type="url"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                    />
                    <label className="form-label">Instagram Profile</label>
                    <input
                        type="url"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                    <label className="form-label">Facebook Profile</label>
                    <input
                        type="url"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                    />
                    <label className="form-label">Twitter Profile</label>
                    <input
                        type="url"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create