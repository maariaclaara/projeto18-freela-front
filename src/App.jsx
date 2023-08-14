import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import AuthContext from "./context/AuthContext";
import Header from "./components/Header";
import InitialPage from "./pages/Initial/InitialPage";
import ProfessionalPage from "./pages/Home/ProfessionalPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import CompanyPage from "./pages/Home/CompanyPage";
import ClientPage from "./pages/Home/ClientPage";
import ProfisserPage from "./pages/Home/ProfisserPage";
import CreateServicePage from "./pages/Home/CreateServicePage";
import ServicesIdPage from "./pages/Home/ServicesIdPage";


export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  return (
    <PagesContainer>
      <Header />
      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<ProfessionalPage />} />
            <Route path="/home/cliente" element={<ClientPage />} />
            <Route path="/home/cliente/empresa" element={<CompanyPage />} />
            <Route path="/home/cliente/profissionais" element={<ProfisserPage />} />
            <Route path="/home/incluir" element={<CreateServicePage />} />
            <Route path="/home/servicos" element={<ServicesIdPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </PagesContainer>
  );
}

const PagesContainer = styled.main` 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`
