import styled from "styled-components";
import MenuProfessional from "../../components/MenuProfessional";

export default function ServicesIdPage() {


  return (
    <HomeContainer>
  
    <MenuProfessional />

    <Component>
        <h1>Aqui você pode visualizar todos os seus serviços</h1>
        <h1>e também editálos ou desativálos!</h1> 

    <Profissers>
      <div>
        <img></img>
      </div>
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
  height: auto;
  padding: 20px;
  filter: blur(100%);
  margin-top: 30px;
`