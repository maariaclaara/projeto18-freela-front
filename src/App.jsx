import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import AuthContext from "./context/AuthContext";
import Header from "./components/Header";
import InitialPage from "./pages/InitialPage";
import ClientPage from "./pages/ClientPage";
import ProfessionalPage from "./pages/ProfessionalPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";


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
