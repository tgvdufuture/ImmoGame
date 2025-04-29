import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // Utilisation de Routes et Route
import { MapView } from "./components/MapView";
import { FloatingMenu } from "./components/FloatingMenu";
import { SidePanel } from "./components/SidePanel";
import PortailImmo from "./components/PortailImmo";
import "./App.css";

function App() {
  const [panelOpen, setPanelOpen] = useState(false); // Initialisé à false pour que le menu soit fermé au départ

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <MapView />
            <FloatingMenu />
            {/* Le bouton burger */}
            <button className="burger-button" onClick={() => setPanelOpen(true)}>
              ☰
            </button>
            {/* Le panneau latéral qui s'ouvre */}
            <SidePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
          </>
        } />
        <Route path="/portail-immobilier" element={
          <PortailImmo />
        } />
      </Routes>
    </div>
  );
}

export default App;
