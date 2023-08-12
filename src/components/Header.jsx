import styled from "styled-components"
import logo from "../assets/logo.png"

export default function HeaderPage() {
    return (
        <Header>
          <p>LIMPÍSSIMO</p>
          <img src={logo}></img>        
        </Header>
    )
}

const Header = styled.div`
    background-color: #03bb85;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: calc(100vw);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;

    img{
        height: 120px;
        margin-left: 30px;
    }
`

