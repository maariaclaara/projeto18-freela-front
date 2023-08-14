import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { useAddService } from "../../services/Service";


export default function CreateServicePage() {
  const { form, handleForm } = useForm({ photo: "", name:"", phone:"", description:"", price:"" });
  const addService = useAddService();

  function submitForm(e) {
    e.preventDefault();

    addService(form);
  }

  return (
    <CreateContainer>

        <h1>Olá! Seja bem vindo(a)!</h1>
        <h2>Insira os dados abaixo para cadastrar seu serviço.</h2>
      
      <form onSubmit={submitForm}>

        <input
          required
          placeholder="Insira sua foto"
          name= "photo"
          value={form.photo}
          onChange={handleForm}
        />

        <input
          required
          placeholder="Seu nome"
          name="name"
          value={form.name}
          onChange={handleForm}
        />

        <input
          required
          placeholder="Telefone"
          name="phone"
          value={form.phone}
          onChange={handleForm}
        />

          <input
          required
          placeholder="Descrição do seu serviço"
          name="description"
          value={form.description}
          onChange={handleForm}
        />

        <input
          required
          placeholder="Preço do seu serviço em reais"
          name="price"
          value={form.price}
          onChange={handleForm}
        />

        <button type="submit">CADASTRAR</button>
      </form>
    </CreateContainer>
  );
}


const CreateContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    color: black;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 70px;
  }

  h2{
    color: black;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
  }

  button{
    margin-top: 10px;
  }

  a{
    color: #054f77;
  }
`