import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/react.png';

//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{ height: 50, width: 50, padding: 10 }}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">Functional Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">Class Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="props">Props</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="map">Map elements from array</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="lifecycle">Lifecycle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="spreadsyntax">Spread Operator</Link>
                </li>
            </ul>
        </nav>
    )
}