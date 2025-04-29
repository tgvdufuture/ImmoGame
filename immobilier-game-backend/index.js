const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

// Données en mémoire
let player = {
  balance: 100000,
  properties: [],
};

const properties = [
  { id: 1, name: "Petit Appartement", price: 50000, rent: 500 },
  { id: 2, name: "Maison Familiale", price: 120000, rent: 1200 },
  { id: 3, name: "Immeuble 4 Étages", price: 500000, rent: 6000 },
];

// Voir les propriétés
app.get('/properties', (req, res) => {
  res.json(properties);
});

// Voir joueur
app.get('/player', (req, res) => {
  res.json(player);
});

// Acheter propriété
app.post('/buy', (req, res) => {
  const { propertyId } = req.body;
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return res.status(404).json({ message: "Propriété introuvable" });
  }

  if (player.balance < property.price) {
    return res.status(400).json({ message: "Fonds insuffisants" });
  }

  player.balance -= property.price;
  player.properties.push(property);

  res.json({ message: "Propriété achetée avec succès", player });
});

// Gains automatiques
setInterval(() => {
  const income = player.properties.reduce((sum, p) => sum + p.rent, 0);
  player.balance += income;
  console.log(`Gains de loyers : +${income} $ | Nouveau solde : ${player.balance} $`);
}, 10000);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
