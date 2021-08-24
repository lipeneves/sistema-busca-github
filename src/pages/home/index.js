import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';

export default function Home(props) {

  const [usuario, setUsuario] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map(repository => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
    });
  }

  return (
    <S.Container>
      <S.Title>Sistema de Busca Usuários do Github</S.Title>
      <S.Input placeholder="Digite um usuário" value={usuario} className="usuarioInput" onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="buttton" onClick={handlePesquisa}>Pesquisar</S.Button>

    </S.Container>
  );
}