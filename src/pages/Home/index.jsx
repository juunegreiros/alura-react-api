import React from 'react';
import { Container, Titulo, Botao } from './style';

const Home = () => (
  <>
    <Container>
      <Titulo>Bem-vindos ao Aluranban!</Titulo>
      <Botao to="/board">Entrar no board</Botao>
    </Container>
  </>
);

export default Home;
