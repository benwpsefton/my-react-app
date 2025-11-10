import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App></App>
        </HashRouter>
    </React.StrictMode>
)