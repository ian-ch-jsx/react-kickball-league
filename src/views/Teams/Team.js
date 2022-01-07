import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeamById } from '../../services/teams';
import './Teams.css';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(props.match.params.id);
      setTeam(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);
  if (loading) return <h1>loading</h1>;

  return (
    <div className="container">
      <h1>{team.name}</h1>
      <h2>Players</h2>
      {team.players.map((player) => (
        <p key={player.id}>
          <Link to={`/players/${player.id}`} key={player.id}>
            {player.name}
          </Link>
        </p>
      ))}
    </div>
  );
}
