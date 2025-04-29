import React from "react";
import { Link } from "react-router-dom";
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
        <div className="nav-buttons">
          <Link to="/portail-immobilier"><button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M16 11H14M16 16H14M8 11L9 12L11 10M8 16L9 17L11 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Portail Immobilier</button></Link>
          <a href=""><button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 3.00152C8.06462 3.00146 8.13126 3.00146 8.2 3.00146H13.462C14.0268 3.00146 14.3092 3.00146 14.5699 3.07329C14.7198 3.11459 14.8641 3.17315 15 3.24761M8 3.00152C7.01165 3.00229 6.49359 3.01484 6.09202 3.21945C5.71569 3.4112 5.40973 3.71716 5.21799 4.09348C5 4.52131 5 5.08136 5 6.20146V17.8015C5 18.9216 5 19.4816 5.21799 19.9094C5.40973 20.2858 5.71569 20.5917 6.09202 20.7835C6.51984 21.0015 7.0799 21.0015 8.2 21.0015H15.8C16.9201 21.0015 17.4802 21.0015 17.908 20.7835C18.2843 20.5917 18.5903 20.2858 18.782 19.9094C19 19.4816 19 18.9216 19 17.8015V9.12396C19 8.70793 19 8.49991 18.9592 8.30094C18.9229 8.12442 18.863 7.9536 18.781 7.79312C18.6886 7.61224 18.5587 7.44981 18.2988 7.12494L15.9608 4.20244C15.608 3.76141 15.4315 3.54089 15.2126 3.38216C15.1445 3.33281 15.0735 3.28788 15 3.24761M8 3.00152V7.00002H15V3.24761M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3432 10.3431 12 12 12C13.6569 12 15 13.3432 15 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Sauvegarder</button></a>
          <a href=""><button><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 20C9.47362 20 7.22075 18.8289 5.75463 17M12 4C14.9611 4 17.5465 5.60879 18.9297 8M4 12C4 9.47362 5.17107 7.22075 7 5.75463M20 12C20 14.8339 18.5265 17.3236 16.3039 18.7448M19.3 5V8H16.3M8 16.3H5V19.3M16.3 16V19H19.3M4.7002 5H7.7002V8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Réinitialiser</button></a>
        </div>
        


        <h1>Objectifs</h1>
        <div className="profile-info">
            <h2>Posséder 10 propriétés</h2>
            <h2>Atteindre 1 000 000 €</h2>
        </div>

        <h1>Succès</h1>
        <div className="profile-info">
            <h2>Premier achat</h2>
            <h2>Atteint 100 000 €</h2>
            <h2>Gagner 5 000 € de loyer</h2>
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
