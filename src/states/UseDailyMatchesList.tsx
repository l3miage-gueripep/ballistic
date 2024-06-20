import { useState, useEffect } from 'react';
import { fetchData } from '../services/Sportmonks';
import { Match } from '../models/match';
import { Team } from '../models/team';

// Assuming fetchData, Team, Match, and Standing types are defined elsewhere
export const useDailyMatchesList  = () => {
  const [date, setDate] = useState('2022-07-24');
  const [matches, setMatches] = useState<Match[] | null>(null);

  useEffect(() => {
    fetchData(`fixtures/date/${date}`)
      .then(result => {
        const fetchTeamPromises = result.data.map((fixture: any) => {
          const [team1Name, team2Name] = fixture.name.split(' vs ');
          return fetchData(`teams/search/${team1Name}`)
            .then(team1Data => {
              const team1 = new Team(team1Data.data[0].name, team1Data.data[0].image_path);
              return fetchData(`teams/search/${team2Name}`).then(team2Data => {
                const team2 = new Team(team2Data.data[0].name, team2Data.data[0].image_path);
                return { team1, team2, fixture };
              });
            });
        });

        Promise.all(fetchTeamPromises).then(results => {
          const matchesTemp: Match[] = [];
          results.forEach(({ team1, team2, fixture }) => {
            const date = new Date(fixture.starting_at);
            const match = new Match(team1, team2, date);
            matchesTemp.push(match);
          });
          setMatches(matchesTemp);
        }).catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }, [date]);

  return { matches, date };
}