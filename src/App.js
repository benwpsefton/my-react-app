import React from "react"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Routes>
                    <Route path="/" element={ <Home></Home> }></Route>
                    <Route path="/news" element={ <News></News> }></Route>
                    <Route path="/regions" element={ <Regions></Regions> }></Route>
                    <Route path="/contact" element={ <Contact></Contact> }></Route>
                </Routes>
            </div>
        </>
    )
}

export default App