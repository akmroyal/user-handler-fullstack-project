import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Searchbar = ({onSearch}) => {
    const [filteredUser, setFilteredUser] = useState([])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">User Handler</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/create' className="nav-link active" aria-current="page">Create User</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Find Any</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/all' className="nav-link">All user</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={onSearch}
                        />
                    </form>
                </div>
            </div>
            {filteredUser.length > 0 && (
                <ul className="list-group mt-2">
                    {filteredUser.map(user => (
                        <li key={user._id} className="list-group-item">
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Searchbar
