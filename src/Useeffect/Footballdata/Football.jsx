import React, { useEffect, useState } from "react";
 
function Football() {
  const [leagueId, setLeagueId] = useState(39);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    setLoading(true);
    fetch(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`, {
      headers: {
        'x-rapidapi-key': '40e5c31fafda72c9dbea705c6378ea09',
       
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch the teams:`);
        }
        return response.json();
      })
      .then((data) => {
       
        setTeams(data.response || []);
        setLoading(false);
      })
      .catch((error) => {
       
        setError(error.message || 'An unknown error occurred');
        setLoading(false);
      });
  }, [leagueId]);
 
  const handleLeagueChange = (event) => {
    setLeagueId(event.target.value);
  };
 
  if (loading) {
    return <div>Loading data...</div>;
  }
 
  if (error) {
    return <div>Error: {error}</div>;
  }
 
  return (
    <div>
      <h1>Football League Matches Data</h1>
 
      <select onChange={handleLeagueChange} value={leagueId}>
        <option value={39}>Premier League</option>
        <option value={78}>La Liga</option>
        <option value={135}>Serie A</option>
        <option value={61}>Bundesliga</option>
      </select>
 
      <ul>
        {teams.map((team) => (
          <li key={team.team.id}>
            {team.team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Football;