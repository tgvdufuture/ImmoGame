import React from "react";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate
import './SidePanel.css'; // Assure-toi que le fichier CSS est bien importé

export function SidePanel({ isOpen, onClose }) {
  const navigate = useNavigate(); // Initialisation du hook navigate

  return (
    <div className={`side-panel ${isOpen ? "open" : ""}`}>
      {/* Bouton de fermeture */}
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="panel-content">
        <h1>Profil</h1>
        <div className="profile-info">
            <h2><strong>Nom :</strong> Timoute</h2>
            <h2><strong>Argent :</strong> 100 000 €</h2>
            <h2><strong>Revenu mensuel :</strong> 2 000 €</h2>
            <h2><strong>Dépenses :</strong> 500 €</h2>
            <h2><strong>Score :</strong> 350</h2>
            <h2><strong>Niveau :</strong> 3</h2>
        </div>

        <h1>Navigation</h1>


        <h1>Objectifs</h1>
        <div className="profile-info">
            <h2>Posséder 10 propriétés</h2>
            <h2>Atteindre 1 000 000 €</h2>
        </div>

        <h1>Succès</h1>
        <div className="profile-info">
            <h2>Premier achat ✅</h2>
            <h2>Atteint 100K € ✅</h2>
            <h2>Gagner 5 000 € de loyer ✅</h2>
        </div>

        <h1>Options</h1>
        <div className="options">
            <label><input type="checkbox" id="sound" /> Son</label>
            <label><input type="checkbox" id="dark-theme" /> Thème sombre</label>
        </div>
      </div>
    </div>
  );
}
