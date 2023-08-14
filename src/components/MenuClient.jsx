import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MenuClientPage() {

  return (
      <MenuClient>
      <Link to="/home/cliente/empresa">
      <button>
        NOSSA EMPRESA 
      </button>
      </Link>
      
      <Link to="https://wa.me/5574981197004">
      <button>
        AGENDAR SERVIÇO
      </button>
      </Link>

      <Link to="/home/cliente/profissionais">
      <button>
        PROFISSIONAIS
      </button>
      </Link>

      <Link to="/cadastro">
      <button>
        TRABALHE CONOSCO
      </button>
      </Link>

      <Link to="https://wa.me/5574981197004">
      <button>
        CONTATO
      </button>
      </Link>
    </MenuClient>   
  );
}

const MenuClient = styled.div`
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
    margin-bottom: 15px;
  }
`
