import React, { useEffect, useRef, useState } from "react";
import L from "leaflet"; // Import de Leaflet
import "./MapView.css"; // Import des styles de la carte
import "leaflet/dist/leaflet.css"; // Import des styles de Leaflet

export function MapView() {
  const mapContainer = useRef(null); // Référence pour la div contenant la carte
  const [map, setMap] = useState(null); // Etat pour la carte

  useEffect(() => {
    if (mapContainer.current && !map) {
      // Créer la carte seulement si elle n'a pas encore été créée
      const leafletMap = L.map(mapContainer.current, {
        center: [51.505, -0.09], // Position initiale de la carte (ici Londres)
        zoom: 13, // Niveau de zoom initial
        zoomControl: false, // Désactive le contrôle de zoom par défaut
      });

      // Ajouter un fond de carte noir et blanc (CartoDB Positron)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
        attribution: '' // Attribuer une chaîne vide pour supprimer l'attribution
      }).addTo(leafletMap);

      // Ajouter un marker par défaut au centre
      L.marker([51.505, -0.09]).addTo(leafletMap).bindPopup("Ici Londres").openPopup();

      // Met à jour l'état de la carte une fois qu'elle est initialisée
      setMap(leafletMap);
    }

    return () => {
      // Clean up lorsque le composant est démonté
      if (map) {
        map.remove();
      }
    };
  }, [map]); // Recrée la carte uniquement si `map` est null (initialisation)

  return (
    <div>
      {/* Div qui contiendra la carte */}
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* La carte sera injectée ici par Leaflet */}
      </div>
    </div>
  );
}
