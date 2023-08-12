import styled from "styled-components";

import { Link } from "react-router-dom";


export default function InitialPage(){

    return(
        <ContainerInitial>
            <div>
                <h1>Bem vindo à maior rede de serviços domésticos do Brasil!</h1>
            </div>

            <div>
            <Link to="/home/cliente">
            <button>SOU CLIENTE!</button>
            </Link>
            
            <Link to="/login">
            <button>SOU PROFISSIONAL!</button>
            </Link>
            </div>
        </ContainerInitial>
    );
}

const ContainerInitial = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;

    h1{
        color: #006494;
        font-weight: 700;
        font-size: 40px;
        line-height: 30px;
        margin-bottom: 30px;
      }


    button{
        width: 300px;
        height: 70px;
        border-radius: 20px;
        margin-right: 50px;
        margin-top: 70px;
    }
    
`


