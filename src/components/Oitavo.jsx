import React, {useState} from 'react'

const Oitavo = () => {
    const [contador, setContador] = useState(0)
    return (
        <>
            <button onClick={()=> setContador(contador+1)}>{contador}</button>
        </>
    )
}

export default Oitavo