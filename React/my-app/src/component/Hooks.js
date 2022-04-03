import React, { useState, useEffect } from 'react'


const Hooks = () => {

    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(10)
    // console.log(count)
    // console.log(setcount)

    const increment = () => {
        setcount(count + 1)

    }

    const decrement = () => {
        setcount2(count2 - 1)

    }


    useEffect(() => {
        console.log("Dom Updated")
    }, [count])


    useEffect(() => {
        console.log("Dom Updated 2")
    }, [count2])



    return (
        <div className='container'>
            <h1>React Hooks</h1>
            <h2>{count}</h2>
            <button onClick={increment}> Increment</button>
            <h2>{count2}</h2>
            <button onClick={decrement}> Decrement</button>
        </div >
    )
}

export default Hooks