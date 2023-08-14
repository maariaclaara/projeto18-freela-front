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
  const [services, setServices] = useState(undefined);

  function getServices() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services`)
      .then((res) => setServices(res.data))
      .catch((err) => alert(err.response.data));
  }

  useEffect(() => {
    getServices();
  }, []);

  return { services, getServices };
}


export function useDeleteService(id){

  return () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/services/${id}`)
      .then((res) => navigate("/home/servicos"))
      .catch((err) => alert(err.response.data));
  };
}
