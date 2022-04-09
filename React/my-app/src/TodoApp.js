import React, { useState } from 'react'

const TodoApp = () => {

    const [input, setinput] = useState('')
    const [todo, settodo] = useState([]);


    const addItem = () => {

        settodo([...todo, input])
        // console.log(todo)
        setinput('')
    }
    const deleteItem = (index) => {
        console.log(index)
        const newItems = todo.filter((elem, itemIndex) => {
            return itemIndex != index

        })
        settodo(newItems)

    }

    const removeAll = () => {
        settodo([])
    }


    return (
        <div className='mt-4'>
            <input type='text' value={input} onChange={(e) => { setinput(e.target.value) }} />
            <button onClick={addItem}> Add Item</button>
            <button onClick={removeAll}> Remove All</button>
            {
                todo.map((elem, index) => {
                    return (
                        <div className='d-flex' key={index}>
                            <h2>{elem}</h2>
                            <button onClick={() => deleteItem(index)}> Delete</button>
                        </div>
                    )

                })

            }

        </div>
    )
}

export default TodoApp