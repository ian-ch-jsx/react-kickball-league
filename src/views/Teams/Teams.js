import { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';
import './Teams.css';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>loading</h1>;
  return (
    <div className="container">
      <h1>Teams</h1>
      {teams.map((team) => (
        <p key={team.id}>
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        </p>
      ))}
    </div>
  );
}
