import React, {useState, useEffect} from 'react'
import filmes from '../services/dados'

const DecimoPrimeiro = () => {
    const [busca, setBusca] = useState('')
    const [filtroFilmes, setFiltroFilmes] = useState([])

    useEffect(()=>{
        setFiltroFilmes(
            filmes.filter(filme => {
                return filme.nome.includes(busca)
            })
        )
    }, [busca])
    
    return (
        <>
           <input placeholder="Digite um filme" onChange={e => {setBusca(e.target.value)}}/>
           <ul>
               {filtroFilmes.map(filme => {
                   return <li key={filme.id}>{filme.nome}</li>
               })}
           </ul>
        </>
    )
}

export default DecimoPrimeiro