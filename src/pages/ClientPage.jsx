import styled from "styled-components";
import { Link } from "react-router-dom";
import Home1 from "../components/Home1";


export default function CLientPage() {

  return (
    <HomeContainer>
      <Menu>
      <button>
        NOSSA EMPRESA 
      </button>

      <button>
        AGENDAR SERVIÇO
      </button>

      <button>
        PROFISSIONAIS
      </button>

      <button>
        TRABALHE CONOSCO
      </button>

      <button>
        CONTATO
      </button>
    </Menu>   
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  position: absolute;
  right: 50px;
  top: 30px;

  &:hover{
    cursor: pointer;
  }
  
  h1{
    margin-right: 10px;
    color: black;
  }
`;

const Menu = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #03bb85;
  height: 40px;
  width: calc(100vw);
  display: flex;
  align-items: center;
  justify-content: space-around;

  button{
    width: 200px;
    height: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    border: none;
    color: black;
    font-weight: 700;
    line-height: 20px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  
  button:hover {
    background: #d3d3d3;
  }

  a {
    text-decoration: none;
  }
`

const Components = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
justify-content: center;
`;