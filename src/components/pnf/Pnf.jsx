import React from 'react'
import { NavLink } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col text-center">
                <h1 className="text-danger">Path not Found</h1>
                <NavLink className="btn btn-warning shadow" to={`/`} >Back to Home</NavLink>
            </div>
        </div>
    </div>
    )
}

export default Pnf