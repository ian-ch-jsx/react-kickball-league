import { useState, useEffect } from 'react';
import { getPlayersById } from '../../services/players';
import './Players.css';

export default function Player(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayersById(props.match.params.id);
      setPlayer(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);
  if (loading) return <h1>loading</h1>;

  return (
    <div className="container">
      <h1>{player.name}</h1>
      <h2>{player.teams.name}</h2>
      <h3>
        {player.teams.city}, {player.teams.state}
      </h3>
      <h3>Position: {player.position}</h3>
    </div>
  );
}
