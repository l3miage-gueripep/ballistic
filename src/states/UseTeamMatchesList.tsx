import { useEffect, useState } from 'react';
import { Match } from '../models/match';
import SportmonksService from '../services/sportmonks';

export const useTeamMatches = (teamId: number) => {
  const [matches, setMatches] = useState<Match[] | null>(null);
  if (!teamId) {
    return matches;
  }

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  const sportmonksService = SportmonksService.getInstance();
  useEffect(() => {
    const fetchTeamMatches = async () => {
      const tempMatches: Match[] = [];
      try {
        const matches = await sportmonksService.fetchData(`teams/${teamId}?include=latest.scores;latest.participants`);
        matches.data.latest.forEach((match: any) => {
          tempMatches.push(Match.fromApiData(match));
        });
        setMatches(tempMatches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() ));

      } catch (error) {
        console.error(error);
      }
    };
    fetchTeamMatches();
  }, []);
 
  return matches;
};
