import { useState, useEffect } from 'react';
import { getPlayersById } from '../../services/players';
import { Link } from 'react-router-dom';
import Players from './Players';

export default function Player(props) {
  const [player, setPlayer] = useState({ team: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayersById(props.match.params.id);
      setPlayer(data[0]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{player.name}</h1>
      <h2>player info</h2>
    </div>
  );
}
