import styled from "styled-components";
import MenuProfessional from "../../components/MenuProfessional";
import ServiceProf  from "../../components/ServiceProf";
import { useGetService } from "../../services/Service";
import { useLogout } from "../../services/Auth";
import { BiExit } from "react-icons/bi";


export default function ServicesIdPage() {
  const { services } = useGetService();
  const logout = useLogout();

  return (
    <HomeContainer>
  
    <MenuProfessional />

    <Header>
      <h1 onClick={logout}>Sair</h1>
      <BiExit onClick={logout} />
    </Header>

    <Component>
        <h1>Aqui você pode visualizar todos os seus serviços,</h1>
        <h1>ativálos ou desativálos!</h1>

    <Profissers>
            {services && services.map( (service) =>
                    ServiceProf(service)
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
  border-radius: 20px;
  width: 90vw;
  height: 100vh;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`

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


