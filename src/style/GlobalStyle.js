import { createGlobalStyle } from "styled-components";
import img from "../assets/back6.jpeg";

const GlobalStyle = createGlobalStyle`
    * {
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
    }
    body{
        font-family: 'Holtwood One SC', serif;
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Playball', cursive;
        font-family: 'Rowdies', cursive;
        background-image: url(${img});
        background-size: cover;
        background-attachment: fixed;
    }
    button {
        background-color: #03bb85;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
        outline: none;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-family: 'Holtwood One SC', serif;
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Playball', cursive;
        font-family: 'Rowdies', cursive;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        font-family: 'Holtwood One SC', serif;
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Playball', cursive;
        font-family: 'Rowdies', cursive;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        padding-top: 15px;
        color: black;
    }
`

export default GlobalStyle