import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useDeleteService } from "../services/Service";

export default function Service(service){
    const deleteService = useDeleteService();

    function onClickDelete() {
      const confirmDelete = window.confirm(
        `Tem certeza que deseja deletar esse serviço?`
      );
      if (confirmDelete) {return deleteService()}
    }


    return(
           <ContainerService key={service.id}>
                <img src={service.photo}/>
                <h1>{service.name}</h1>
                <p>{service.description}</p>
                <p>{service.phone}</p>
                <span>R${service.price}</span>
                <IoMdClose onClick={onClickDelete} />
            </ContainerService>  
    )
}

const ContainerService = styled.div`
    width: 240px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img{
        width: 150px;
        height: 180px;
        border-radius: 5px;
    }

    h1{
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;      
        color: black;
        margin-top: 10px;
    }

    p{
        font-size: 20px;
        line-height: 20px;
        font-weight: 700;      
        color: black;
        margin-top: 10px;
    }

    span{
        font-weight: bolder;
        font-size: 20px;
        margin-top: 10px;
        color: #03bb85;
        margin-bottom: 10px;
    }
`
 


