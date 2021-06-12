import React, {useState, useEffect} from 'react'

const Decimo = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokemon(data.results)
            })
        
       
    },[])
    
    return (
        <>
            {pokemon.map(poke =>(
                <>
                    <p>{poke.name}</p>
                </>
            ))}
        </>
    )
}

export default Decimo