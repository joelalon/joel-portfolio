/* Filename: Layout.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

import React from "react"
import { Link } from "react-router-dom"
import logo from "./assets/logo.png"
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
      <div className="container">
        {/* Header Section */}
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <h1>Joel's Portfolio</h1>
        </header>
  
        {/* Navigation Bar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>

        {/* Main Content */}
        <main>
            {/* This will render the component for the current route */}
            <Outlet />
        </main>
      </div>
    );
  }