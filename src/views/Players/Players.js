//render all players list
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setPlayers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>loading</h1>;

  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>
          <Link to={`/players/${player.id}`}>{player.name}</Link>
        </li>
      ))}
    </ul>
  );
}
