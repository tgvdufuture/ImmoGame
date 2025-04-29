import './PlayerInfo.css';

export function PlayerInfo({ name, money, role }) {
  return (
    <div className="player-info">
      <h2>{name}</h2>
      <p>💰 {money.toLocaleString()} €</p>
      <p>👤 Statut : {role}</p>
    </div>
  );
}
