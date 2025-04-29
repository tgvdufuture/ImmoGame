import { useState, useEffect } from 'react';

function App() {
  const [player, setPlayer] = useState(null);
  const [properties, setProperties] = useState([]);

  // Charger les données au chargement
  useEffect(() => {
    fetch('http://localhost:3000/player')
      .then(res => res.json())
      .then(data => setPlayer(data));

    fetch('http://localhost:3000/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);

  // Acheter une propriété
  const buyProperty = async (id) => {
    const response = await fetch('http://localhost:3000/buy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ propertyId: id }),
    });

    if (response.ok) {
      const updatedPlayer = await response.json();
      setPlayer(updatedPlayer.player);
    } else {
      const error = await response.json();
      alert(error.message);
    }
  };

  if (!player) return <div>Chargement...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏠 Jeu Immobilier</h1>
      <h2>💰 Solde : {player.balance} $</h2>

      <h3>Propriétés à acheter :</h3>
      <ul>
        {properties.map(property => (
          <li key={property.id} style={{ marginBottom: '10px' }}>
            <strong>{property.name}</strong> - Prix : {property.price} $ - Loyer : {property.rent} $/10s
            <br />
            <button onClick={() => buyProperty(property.id)}>Acheter</button>
          </li>
        ))}
      </ul>

      <h3>📦 Vos propriétés :</h3>
      <ul>
        {player.properties.map((prop, index) => (
          <li key={index}>
            {prop.name} - Loyer : {prop.rent} $
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
