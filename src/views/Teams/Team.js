//Fetch team data
//map through players of team and link to player page
import { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';

export default function Team(thisTeam) {
  const [team, setTeam] = useState({ players: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(thisTeam.match.params.id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) <h2>loading</h2>;

  return (
    <div>
      <h1>{team.name}</h1>
    </div>
  );
}
