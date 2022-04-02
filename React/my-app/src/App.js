import React from 'react'
import './App.css'
import Header from './component/HeaderComponent/Header'
import About from './component/About'
import Footer from './component/Footer'
import Services from './component/Services'
const App = () => {

  let myName = "Chandresh"
  console.log(myName)


  return (
    <div>

      <Header name={myName} age={18} />
      <About />
      <Services />
      <Footer />
    </div >
  )
}

export default App
