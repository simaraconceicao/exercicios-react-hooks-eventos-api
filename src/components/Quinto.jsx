import React, {useState} from 'react'

const Quinto = () => {
    const [count, setCount] = useState(0)
    function incrementa(){
        setCount(count+1)
    }

    function decrementa(){
        setCount(count-1)
    }
    return (
        <>
        <button onClick={incrementa}>+</button>
        <p>{count}</p>
        <button onClick={decrementa}>-</button>
        </>
    )
}

export default Quinto