import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import Extrato from "../Extrato";

const ContainerWrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`
ContainerWrapper.Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  @media (max-width: 800px) {
    flex-direction: column;
}

`

const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá Fulano!</Titulo>
      <ContainerWrapper.Conteudo>
        <Conta />
        <Extrato />
      </ContainerWrapper.Conteudo>
    </ContainerWrapper>
  );
};

export default Container;