import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Terceiro = () => {
    const [repos, setRepos] = useState([])

    useEffect(()=> {
        const fetchData = async () =>{
            const response = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
            const dados = await response.data //ja vem com dados em json
            setRepos(dados)
        }
        fetchData()
    }, [])

    function handleFavorite(id) {
        const newRepos = repos.map(item => {
            return item.id === id ? { ...item, favorite: !item.favorite} : item
        })

        setRepos(newRepos)
    }

    return(
        <>
            <ul>
                {repos.map(item => (
                    <>
                        <li key={item.id}>{item.name}</li>
                        {item.favorite && <span>(Favorito)</span>}
                        <button onClick={()=>handleFavorite(item.id)}>Favoritar</button>
                    </>
                ))}
            </ul>
        </>
    )
}

export default Terceiro