import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // Utilisation de Routes et Route
import { MapView } from "./components/MapView";
import { FloatingMenu } from "./components/FloatingMenu";
import { SidePanel } from "./components/SidePanel";
import "./App.css";

function App() {
  const [panelOpen, setPanelOpen] = useState(false); // Initialisé à false pour que le menu soit fermé au départ

  return (
    <div>
      <MapView />
      <FloatingMenu />

      {/* Le bouton burger */}
      <button className="burger-button" onClick={() => setPanelOpen(true)}>
        ☰
      </button>

      {/* Le panneau latéral qui s'ouvre */}
      <SidePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}

export default App;
