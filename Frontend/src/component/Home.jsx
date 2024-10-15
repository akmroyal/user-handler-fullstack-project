import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My User Handler Application</h1>
      <p>
        This is a simple React application designed to manage user information.
        You can create, view, edit, and delete user profiles from the database.
      </p>
      <h2>Features:</h2>
      <ul>
        <li><Link to='/create' className="nav-link active bg-primary" aria-current="page">Create new users</Link></li>
        <li><Link to='/all' className="nav-link">View All users</Link></li>
        <li><Link to='/all' className="nav-link">Edit user details</Link></li>
        <li>Delete users from the database<Link to='/all' className="nav-link">Edit user details</Link></li>
      </ul>

      <h3>Technologies Used:</h3>
      <ul>
        <li>React (Frontend)</li>
        <li>Node.js & Express (Backend)</li>
        <li>MongoDB (Database)</li>
      </ul>
    </div>
  )
}

export default Home
