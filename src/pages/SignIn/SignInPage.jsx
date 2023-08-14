import { Link } from "react-router-dom";
import useIn from "../../hooks/UseIn";
import useForm from "../../hooks/useForm";
import { useLogin } from "../../services/Auth";
import styled from "styled-components";

export default function SignInPage() {
  const { form, handleForm } = useForm({ email: "", password: "" });
  const login = useLogin();
  useIn();

  function submitForm(e) {
    e.preventDefault();
    login(form);
  }

  return (
    <SingInContainer>
      <form onSubmit={submitForm}>
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
          minLength={6}
          type="password"
          autoComplete="new-password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleForm}
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </SingInContainer>
  );
}


const SingInContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button{
    margin-top: 10px;
  }

  a{
    color: #054f77;
  }
`
