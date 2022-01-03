import { useState, useEffect } from 'react';
import { getPlayersById } from '../../services/players';

export default function Player(props) {
  const [player, setPlayer] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayersById(props.match.params.id);
      setPlayer(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);
  console.log(player);
  return (
    <div>
      <h1>{player.name}</h1>
      <h2>player info</h2>
      <p>{player.position}</p>
      <p></p>
    </div>
  );
}
