import React from 'react'

const About = () => {

    let buttonTxt = "I am a button"
    const clicked = () => {
        console.log("Clicked")
    }

    return (
        <div>
            <h1>I am about comp</h1>
            <button onClick={clicked}>{buttonTxt}</button>
        </div>
    )
}

export default About