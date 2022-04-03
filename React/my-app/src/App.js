import React from 'react'
import './App.css'
import Header from './component/HeaderComponent/Header'
import About from './component/About'
import Footer from './component/Footer'
import Services from './component/Services'
import Hooks from './component/Hooks'
import UseApi from './component/UseApi'


const App = () => {

  let myName = "Chandresh"
  console.log(myName)


  return (
    <div>

      <UseApi></UseApi>
      {/* <Services /> */}

      {/* <Hooks /> */}

      {/* <Header name={myName} age={18} />
      <About />
      <Services />
      <Footer /> */}
    </div >
  )
}

export default App
