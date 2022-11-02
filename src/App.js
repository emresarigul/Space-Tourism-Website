import React from "react";
import Header from "./components/Header";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import PageContextsProvider from "./context/context";

function App() {
  return (
    <div>
      <PageContextsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </PageContextsProvider>
    </div>
  );
}

export default App;
