import styled from "styled-components";
import img from "../assets/back4.png";

export default function Home1() {

  return (
    <Component>
    <div>
        <img src={img}></img>
    </div>
   
    </Component>
  );
};


const Component = styled.div`

    div{
        background-color: black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
        border-radius: 20px;
        width: 800px;
        height: 600px;
    }

    img{
        width: 500px;
        height: 450px;
        position: absolute;
        bottom: 120px;
        right: 400px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
        border-radius: 20px;
    }
`