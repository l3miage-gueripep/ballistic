import { useEffect, useState } from 'react';
import { Match } from '../models/match';
import { Team } from '../models/team';
import SportmonksService from '../services/sportmonks';

export const useTeamMatches = (teamId: number) => {
  const [matches, setMatches] = useState<Match[] | null>(null);
  if (!teamId) {
    return matches;
  }

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const startDateString = startDate.toISOString().split('T')[0];
  const endDate = new Date();
  const endDateString = endDate.toISOString().split('T')[0];

  const sportmonksService = SportmonksService.getInstance();
  useEffect(() => {
    const fetchTeamMatches = async () => {
      const tempMatches: Match[] = [];
      try {
        const matches = await sportmonksService.fetchData(`fixtures/between/${startDateString}/${endDateString}/${teamId}?include=scores;participants`);
        matches.data.forEach((match: any) => {
          const localTeamData = match.participants.find((participant: any) => participant.meta.location === "home");
          const localTeam : Team = new Team(localTeamData.id, localTeamData.name, localTeamData.image_path);
          const localScore : number = match.scores.find((score: any) => score.participant_id === localTeam.id).score.goals;
          const visitorTeamData = match.participants.find((participant: any) => participant.meta.location === "away");
          const visitorTeam : Team = new Team(visitorTeamData.id, visitorTeamData.name, visitorTeamData.image_path);
          const visitorScore : number = match.scores.find((score: any) => score.participant_id === visitorTeam.id).score.goals;
          const newMatch = new Match(match.id, localTeam, visitorTeam, new Date(match.starting_at), localScore, visitorScore);
          tempMatches.push(newMatch);
        });
        setMatches(tempMatches.sort((a, b) => b.date.getTime() - a.date.getTime()));

      } catch (error) {
        console.error(error);
      }
    };
    fetchTeamMatches();
  }, []);
 
  return matches;
};
