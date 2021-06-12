import React, { useState } from 'react';
function Primeiro() {
  const [repositories, setRepositories] = useState([
    {
      id: 1,
      name: 'repo-1'
    },
    {
      id: 2,
      name: 'repo-2'
    },
    {
      id: 3,
      name: 'repo-3'
    }
   ])

   function handleAddRepository() {
     setRepositories([...repositories, {
       id: Math.random(),
       name: 'Novo repo'
     }])
   }

  return (
    <div className="App">
     <h1>Hello useState</h1>
     <p>Estado: armazena informações dentro do meu componente.</p>
     <p>useState: retorna um vetor, então podemos fazer uma desestruturação, tendo primeiro índice como valor inicial, e o segundo é uma função que permite atualizar o estado do componente.</p>
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>
        Add Repo
      </button>
    </>
    </div>
  );
}

export default Primeiro;
