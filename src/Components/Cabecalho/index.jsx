import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";


const Header = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
Header.Logo = styled.img`
  height: 50px;
  width: 50px;
`

Header.Button = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  cursor: pointer;
  
  border: ${(props) => props.primary ? "none" : "2px solid white"};
  background-color: ${(props) => props.primary ? "white" : corPrimaria};
  color: ${(props) => props.primary ? corPrimaria : "white"};
`

const Cabecalho = () => {
  return (
    <Header>
      <Header.Logo className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Header.Button primary={false} href="https://google.com">
          Ajuda
        </Header.Button>

        <Header.Button primary={true} href="https://google.com">
          Sair
        </Header.Button>
      </div>
    </Header>
  );
};

export default Cabecalho;
