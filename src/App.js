import React, { useState } from "react";
import Header from "./Components/Header";
import AppRoutes from "./Components/Routes";
import ModalForm from "./Components/ModalForm";

function App() {
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api/v1/";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <AppRoutes
        API_BASE_URL={API_BASE_URL}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;