import React from "react"
import Header from "./Components/Header.js"
import Content from "./Components/Content.js"
import './style.css'


function App(){
    return(
        <>
        <React.StrictMode>
        <Header />
        <Content />
        </React.StrictMode>
        </>
    )
}

export default App