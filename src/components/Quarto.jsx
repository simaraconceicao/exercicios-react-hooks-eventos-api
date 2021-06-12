import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Quarto = () => {
    const [repos, setRepos] = useState([])

//similar ao did mount quando a pagina carregar
    useEffect(()=> {
        const fetchData = async () =>{
            const response = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
            const dados = await response.data //ja vem com dados em json
            setRepos(dados)
        }
        fetchData()
    }, [])

    //similar ao didUpdate, colocamos a dependencia de quando o efeito vai modificar a tela
    useEffect(()=>{
        const filtered = repos.filter(repo => repo.favorite)

        document.title = `Você tem ${filtered.length} favs.`
    }, [repos])

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

export default Quarto