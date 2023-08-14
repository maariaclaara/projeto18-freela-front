import { BiExit } from "react-icons/bi";
import { useLogout } from "../../services/Auth";
import styled from "styled-components";
import MenuProfessional from "../../components/MenuProfessional";


export default function MenuClient() {
  const logout = useLogout();

  return (
    <HomeContainer>

    <MenuProfessional />

    <Header>
      <h1 onClick={logout}>Sair</h1>
      <BiExit onClick={logout} />
    </Header>

    </HomeContainer>
  );
}


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
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
