import styled from "styled-components";
import MenuClient from "../../components/MenuClient";
import ServiceClient  from "../../components/ServiceClient";
import { useGetService } from "../../services/Service";


export default function ProfisserPage() {
  const { services } = useGetService();


  return (
    <HomeContainer>
  
    <MenuClient />

    <Component>
        <h1>Conheça nossos profissionais de total competência e confiança</h1> 
        <h1>e entre em contato conosco para agendar o seu serviço!</h1>

      <Profissers>
        {services && services.map( (service) =>
            ServiceClient(service)
        )}
      </Profissers>
    </Component>

    </HomeContainer>
  );
};


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Component = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

        h1{
            color: black;
            font-weight: 700;
            line-height: 40px;
            font-size: 30px;
        }

`
const Profissers = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  border-radius: 20px;
  width: 90vw;
  height: 100vh;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`