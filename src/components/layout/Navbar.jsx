import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning shadow">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">Redux-CRUD</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="collapse navbar-collapse"id='menu'>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/`}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`/create`}>Create</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar