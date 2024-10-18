import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
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
        const addUser = {
            name,
            email,
            age,
            socialLinks: {
                facebook,
                instagram,
                linkedin,
                twitter
            }
        }

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


// ---------------------------

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Create = () => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [age, setAge] = useState(0)
//     const [avatar, setAvatar] = useState(null) // New state for avatar
//     const [facebook, setFacebook] = useState("") // New state for Facebook link
//     const [twitter, setTwitter] = useState("")  // New state for Twitter link
//     const [linkedIn, setLinkedIn] = useState("")  // New state for LinkedIn link
//     const [gitHub, setGitHub] = useState("")  // New state for GitHub link
//     const [displayError, setDisplaError] = useState('')
//     const [error, setError] = useState('')
//     const navigate = useNavigate()

//     // Handling avatar upload and setting the file
//     // const handleAvatarChange = (e) => {
//     //     setAvatar(e.target.files[0])
//     // }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const formData = new FormData()

//         // Adding all the data to formData
//         formData.append("name", name)
//         formData.append("email", email)
//         formData.append("age", age)
//         // formData.append("avatar", avatar)  // Adding avatar to formData
//         formData.append("facebook", facebook)
//         formData.append("twitter", twitter)
//         formData.append("linkedIn", linkedIn)
//         formData.append("gitHub", gitHub)

//         const response = await fetch('http://localhost:8000/api/user', {
//             method: "POST",
//             body: formData,
//         })

//         const result = await response.json()

//         if (!response.ok) {
//             console.log(result.error)
//             setDisplaError('danger')
//             setError(result.error)
//         }

//         if (response.ok) {
//             setDisplaError('success')
//             setError('User created successfully :)')
//             setName('')
//             setEmail('')
//             setAge(0)
//             setAvatar(null)
//             setFacebook('')
//             setTwitter('')
//             setLinkedIn('')
//             setGitHub('')

//             setTimeout(() => {
//                 setError('')
//                 navigate('/all')
//             }, 1000)
//         }
//     }

//     return (
//         <div className='container text-center gap-5'>
//             <h1 className='bg-success my-4'>Create User</h1>
//             <h4>Enter Your Details</h4>
//             {error && <div className={`alert alert-${displayError}`}>{error}</div>}
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="mb-3 text-start">
//                     {/* Avatar upload */}
//                     <label className="form-label">Avatar</label>
//                     <input
//                         type="file"
//                         className="form-control"
//                         onChange={handleAvatarChange}
//                     />
//                     {avatar && (
//                         <div className="mt-2">
//                             <img
//                                 src={URL.createObjectURL(avatar)}
//                                 alt="Avatar Preview"
//                                 style={{ width: '100px', borderRadius: '50%' }}
//                             />
//                         </div>
//                     )}

//                     {/* Name input */}
//                     <label className="form-label mt-3">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />

//                     {/* Email input */}
//                     <label className="form-label mt-3">Email address</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />

//                     {/* Age input */}
//                     <label className="form-label mt-3">Age</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                     />

//                     {/* Social media links */}
//                     <label className="form-label mt-3">Facebook</label>
//                     <input
//                         type="url"
//                         className="form-control"
//                         value={facebook}
//                         onChange={(e) => setFacebook(e.target.value)}
//                     />

//                     <label className="form-label mt-3">Twitter</label>
//                     <input
//                         type="url"
//                         className="form-control"
//                         value={twitter}
//                         onChange={(e) => setTwitter(e.target.value)}
//                     />

//                     <label className="form-label mt-3">LinkedIn</label>
//                     <input
//                         type="url"
//                         className="form-control"
//                         value={linkedIn}
//                         onChange={(e) => setLinkedIn(e.target.value)}
//                     />

//                     <label className="form-label mt-3">GitHub</label>
//                     <input
//                         type="url"
//                         className="form-control"
//                         value={gitHub}
//                         onChange={(e) => setGitHub(e.target.value)}
//                     />
//                 </div>

//                 {/* Submit button */}
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

//export default Create




