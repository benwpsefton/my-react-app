import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

const basename = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter basename={basename}>
            <App></App>
        </BrowserRouter>
    </React.StrictMode>
)