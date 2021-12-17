// Fetch team Data
// map through teams to display link to team page
import { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';

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
    <ul>
      {teams.map((team) => (
        <li key={team.id}>
          <p>{team.name}</p>
        </li>
      ))}
    </ul>
  );
}
