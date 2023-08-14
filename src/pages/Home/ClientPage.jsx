import styled from "styled-components";
import MenuClient from "../../components/MenuClient";


export default function ClientPage() {

  return (
    <HomeContainer>

      <MenuClient />

    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

