import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="#">
        tienda 
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/productos">
              Lista de productos 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/crear">
              Crear
            </Link>
          </li>
          
          
        </ul>
      </div>
      </div>
    </nav>
  );
}
