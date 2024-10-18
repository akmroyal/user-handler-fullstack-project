import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar.jsx'

const Read = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    // using for success alert or danger alert
    const [displayError, setDisplaError] = useState('')
    // for the search bar
    const [searchQuery, setSearchQuery] = useState('')


    async function getDataFromBackend() {
        // trying to fetch data from backend
        const response = await fetch('http://localhost:8000/api/user')

        // storing the data as json type
        const result = await response.json()

        // trying to get error if any occurs
        if (!response.ok) {
            console.log(result.error);
            setError(result.error)
        }

        // perform an effect or cross check
        if (response.ok) {
            setData(result)
        }
    }

    // performing delete opertation 
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:8000/api/user/${id}`, {
            method: 'DELETE',
        })

        const result = await response.json()
        if (!response.ok) {
            console.log(result.error)
            setDisplaError('danger')
            setError(result.error)
        }

        if (response.ok) {
            setDisplaError('success')
            setError('Deleted SuccessFully')

            setTimeout(() => {
                setError('')
                getDataFromBackend();
            }, 1000)
        }
    }

    useEffect(() => {
        getDataFromBackend()
    }, [])
    console.log(data);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    }

    const filteredUsers = data.filter(
        user => user.name.toLowerCase().includes(searchQuery)
    )

    return (
        <>
            <Searchbar onSearch={handleSearch} /> {/* Pass the search handler to Searchbar */}
            <div className='container my-2'>
                <h2 className='text-center'>All User Details</h2>
                {error && <div className={`alert alert-${displayError}`}>{error}</div>}
                <div className='row'>
                    {/* Use filtered users instead of all data */}
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((e) => (
                            <div key={e._id} className='col-3'>
                                <div className="card text-center">
                                <img class="card-img-top" src={e.avatar} alt="Avatar"/>
                                    <div className="card-body">
                                        <h3 className="">{e.name}</h3>
                                        <h6 className="card-title">{e.email}</h6>
                                        <p className="">{e.age}</p>
                                        <p className="">{e?.socialLinks?.facebook || "No link found"}-facebook</p>
                                        <p className="">{e?.socialLinks?.instagram || "No link found"}-instagram</p>
                                        <p className="">{e?.socialLinks?.linkedin || "No link found"}-linkedin</p>
                                        <p className="">{e?.socialLinks?.twitter || "No link found"}-twitter</p>
                                    </div>
                                    <div className="card-body">
                                        <Link to={`/${e._id}`} className="card-link">Edit</Link>
                                        <Link className="card-link" onClick={() => handleDelete(e._id)}>Delete</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">No users found.</div>
                        // Message for no results
                    )}
                </div>
            </div>
        </>
    )
}

export default Read
