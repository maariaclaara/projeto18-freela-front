import styled from "styled-components";
import { Link } from "react-router-dom";
import useIn from "../hooks/UseIn";
import useForm from "../hooks/useForm";
import { useSignUp } from "../services/Auth";


export default function SignUpPage() {
  const { form, handleForm } = useForm({ name: "", email: "", city: "", phone: "", password: "", confirmPassword: "" });
  useIn();
  const signUp = useSignUp();

  function submitForm(e) {
    e.preventDefault();

    signUp(form);
  }

  return (
    <SignUpContainer>
      <form onSubmit={submitForm}>

        <input
          required
          placeholder="Nome Completo"
          name="name"
          value={form.name}
          onChange={handleForm}
        />

        <input
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleForm}
        />

          <input
          required
          placeholder="Cidade"
          name="city"
          value={form.city}
          onChange={handleForm}
        />

        <input
          required
          type="phone"
          placeholder="Telefone"
          name="phone"
          value={form.phone}
          onChange={handleForm}
        />

        <input
          required
          minLength={6}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
        />

        <input
          required
          minLength={6}
          type="password"
          autoComplete="new-password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/login">Já tem uma conta? Entre agora!</Link>
    </SignUpContainer>
  );
}


const SignUpContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button{
    margin-top: 10px;
  }

  h1{
    color: #006494;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
  }

  h2{
    color: #006494;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 50px;
  }

  a{
    color: #054f77;
  }
`
