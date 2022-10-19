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
                    <img alt="logo" src={logo} style={{ height: 50, width: 50, padding: 10 }}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Functional Component</Link>
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
                <li className="nav-item">
                    <Link className="nav-link" to="toggle">Toggle</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="rooks">Rooks</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="fetch">Fetch API</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="form">Form Validation</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="hookform">React HookForm</Link>
                </li>
            </ul>
        </nav>
    )
}