import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Home(props) {

  const [usuario, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map(repository => {
        return (repositoriesName.push(repository.name));
      });
      localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
      setErro(false);
      history.push('./repositories');
    })

    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.Container>
      <S.Title>Sistema de Busca Usuários do Github</S.Title>
      <S.Input placeholder="Digite um usuário" value={usuario} className="usuarioInput" onChange={e => setUsuario(e.target.value)} />
      <S.Button type="buttton" onClick={handlePesquisa}>Pesquisar</S.Button>

      {erro ? <S.Error>Ocorreu um erro. Tente novamente.</S.Error> : ''}
    </S.Container>
  );
}