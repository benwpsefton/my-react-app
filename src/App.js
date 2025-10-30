import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import News from "./pages/News"
import Regions from "./pages/Regions"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid p-0">
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