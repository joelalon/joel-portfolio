/* Filename: MainRouter.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

import React from "react"
import { Route, Routes } from "react-router-dom"
import About from "../components/About"
import Contacts from "../components/Contact"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Layout from "./Layout"

const MainRouter = () => {
    return(
        <Routes>
            {/* Define the route for the layout */}
            <Route path="/" element={<Layout />}>
                {/* Nested routes will be displayed inside the layout */}
                <Route index element={<Home />} /> {/* The index route is the default (Home) */}
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contacts />} />
            </Route>
        </Routes>
    )
}

export default MainRouter