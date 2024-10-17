import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                        <Link to='/all' className="nav-link">Find Any</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/all' className="nav-link">All user</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
