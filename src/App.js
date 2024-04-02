import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatApp from "./Components/Chat";
import MedicalIdVerification from "./pages/MedicalIdentification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MedicalIdVerification />} />
          <Route path="/chat" element={<ChatApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
