import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function useAddService() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const config = { headers: { Authorization: `Bearer ${token}` } };
  
    return (body) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/services`, body, config)
        .then((res) => navigate("/home/servicos"))
        .catch((err) => alert(err.response.data));
    };
  }


export function useGetService() {
  const [transactions, setTransactions] = useState(undefined);
  const { token } = useContext(AuthContext);

  const config = { headers: { Authorization: `Bearer ${token}` } };

  function getTransactions() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/transactions`, config)
      .then((res) => setTransactions(res.data))
      .catch((err) => alert(err.response.data));
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions, getTransactions };
}


export function useDeleteService() {
  const { token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  return (id, getTransactions) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/services/${id}`, config)
      .then((res) => getTransactions())
      .catch((err) => alert(err.response.data));
  };
}

export function useEditService() {
  const { token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const navigate = useNavigate();

  return (id, body) => {
    axios
      .put(`${import.meta.env.VITE_API_URL}/services/${id}`, body, config)
      .then((res) => navigate("/home"))
      .catch((err) => alert(err.response.data));
  };
}