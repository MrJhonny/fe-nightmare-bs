import React, { useState } from "react";
import Header from "./Components/Header";
import AppRoutes from "./Components/Routes";
import ModalForm from "./Components/ModalForm";
import FloatingButton from "./Components/FloatingButton";

function App() {
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://api.tellmeyournightmare.com:3000/api/v1/";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <AppRoutes API_BASE_URL={API_BASE_URL} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <FloatingButton onClick={() => setIsModalOpen(true)} />
      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
