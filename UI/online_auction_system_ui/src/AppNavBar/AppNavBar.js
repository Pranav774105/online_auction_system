import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <NavLink className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <NavLink className="text-decoration-none fw-bolder" to="#">Auction </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link active" aria-current="page" to="information">Home</NavLink>
        </li>
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link" to="#">Upcoming Auctions</NavLink>
        </li>
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link" to="#">Winners</NavLink>
        </li>
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link" to="#">Feedback</NavLink>
        </li>
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link" to="/information">product info</NavLink>
        </li>
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link" to="/show">show product</NavLink>
        </li>
        <li className="text-decoration-none fw-bolder">
          <NavLink className="nav-link " to="#" tabindex="-1" >Login</NavLink>
        </li>
      </ul>
    </div>
        <li class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </li>
  </div>
</NavLink>
  )
}

export default NavBar