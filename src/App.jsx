import React from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ContentMain from './components/ContentMain/ContentMain'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <NavBar />
      <ContentMain  />
      <Footer />
    </div>
  )
}

export default App
