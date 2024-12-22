import React, { useState } from "react";
import Header from "./Components/Header";
import AppRoutes from "./Components/Routes";
import ModalForm from "./Components/ModalForm";
import FloatingButton from "./Components/FloatingButton";
import GoogleTag from "./Components/GoogleTag";

function App() {
  const API_BASE_URL = process.env.REACT_APP_API_URL || "https://api.tellmeyournightmare.com/api/v1/";
  // const API_BASE_URL = process.env.REACT_APP_API_URL || "http://192.168.1.141:3000/api/v1/";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <GoogleTag /> 
      <AppRoutes API_BASE_URL={API_BASE_URL} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <FloatingButton onClick={() => setIsModalOpen(true)} />
      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
