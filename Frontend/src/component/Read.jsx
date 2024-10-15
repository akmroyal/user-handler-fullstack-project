import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    // using for success alert or danger alert
    const [displayError, setDisplaError] = useState('')

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

    return (
        <div className='container my-2'>
            <h2 className='text-center'>All user details</h2>
            {error && <div className={`alert alert-${displayError}`}>{error}</div>}
            <div className='row'>
                {/* using map to one by ony printing data and ? sign for optionally check if data is waiting or process then don't print any thing */}
                {data?.map((e) => (
                    <div key={e._id} className='col-3'>
                        <div className="card text-center">
                            <div className="card-body">
                                <h3 className="">{e.name}</h3>
                                <h6 className="card-title">{e.email}</h6>
                                <p className="">{e.age}</p>
                            </div>
                            <div className="card-body">
                                <Link to={`/${e._id}`} className="card-link">Edit</Link>
                                <Link className="card-link" onClick={() => handleDelete(e._id)}>Delete</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Read
