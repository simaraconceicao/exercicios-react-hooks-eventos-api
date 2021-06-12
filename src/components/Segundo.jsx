import React, { useState, useEffect } from 'react';
function Segundo() {
  const [repositories, setRepositories] = useState([])
  
  useEffect(()=>{
    const pegaDados = async () =>{
        const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
        const data = await response.json() //preciso transformar em json
        setRepositories(data)
    }
    pegaDados()
  }, [])


  return (
    <div className="App">
     <h1>Hello useEffect</h1>
     <p>Effect: dá acesso a utilizar os metodos de ciclo de vida de um componente. (did mount, did update, will unmount)</p>
     <p>useEffect: Agora usamos o mesmo hook para todos os estados do ciclo de vida. Na função useEffect recebemos 2 parametros, o primeiro é uma função que será executada, segundo parametro quando a função deve ser executada:
        <br></br>
        <br></br>

         - Se passarmos uma variavel, a função será disparada quando a variavel mudar. Podemos passar quantas variaveis quiser. Eu posso ter varios useEffects no meu componente.
         <br></br>
         <br></br>

         - Array vazio, tipo did mount - carregar uma informacao quando o componente for montado na tela. Sem dependência de variaveis. Só executa uma vez dentro da montagem do nosso componente.
         <br></br>
         <br></br>
         
         -como se fosse will unmount 
          função que retorna dentro de um useEffect e executa no momento que nosso componente deixa de existir
    </p>
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
    </div>
  );
}

export default Segundo;
