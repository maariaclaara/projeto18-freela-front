import styled from "styled-components";
import img from "../../assets/back4.png";
import MenuClient from "../../components/MenuClient";

export default function CompanyPage() {

  return (
    <HomeContainer>
  
    <MenuClient />

    <Component>
    <div>
        <h1>Contrate serviços domésticos pela LIMPÍSSIMO!</h1>
        <p>Encontrar um bom profissional para fazer a limpeza</p> 
        <p> da sua casa nem sempre é uma tarefa fácil.</p> 
        <p>Por isso, a LIMPÍSSIMO disponibiliza profissionais</p> 
        <p>competentes e de confiança para essa função.</p> 
        <p>Você terá o melhor serviço doméstico em sua</p>
        <p>residência, por um preço super assessível!</p> 
        <p>Estamos no mercado desde 2011, focando sempre</p>
        <p>na satisfação do cliente e do profissional!</p> 
   
        <img src={img}></img>
    </div> 
    </Component>

    </HomeContainer>
  );
};


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Component = styled.div`
    width: calc(100vw);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    div{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
        border-radius: 20px;
        width: 800px;
        height: 500px;
        padding: 20px;
        filter: blur(100%);

        h1{
            color: black;
            font-weight: 700;
            line-height: 30px;
            font-size: 30px;
            margin-bottom: 50px;
        }

        p{
            color: black;
            font-weight: 400;
            line-height: 40px;
            font-size: 20px;
        }
    }

    img{
        width: 500px;
        height: 400px;
        position: absolute;
        bottom: 200px;
        right: 320px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
        border-radius: 20px;
    }
`