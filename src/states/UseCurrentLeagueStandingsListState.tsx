import { useEffect, useState } from "react";
import { LeagueStanding } from "../models/league-standing";
import { Team } from "../models/team";
import SportmonksService from "../services/sportmonks";

export const useCurrentLeagueStandingsListState = (leagueId: number) => {
    const [leagueStandingsList, setLeagueStandingsList] = useState<LeagueStanding[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const sportmonksService = SportmonksService.getInstance();
    const currentYearString = new Date().getFullYear().toString();
    useEffect(() => {
        const fetchLeagueStandingsList = async () => {
            try {
                // get league most recent season, then select most recent round, then get standings for that round
                const seasons = await sportmonksService.fetchData(`seasons/search/${currentYearString}`);
                const season = findSeason(seasons, leagueId, currentYearString);

                const rounds = await sportmonksService.fetchData(`rounds/seasons/${season.id}`);
                const round = findRound(rounds);

                const standings = await sportmonksService.fetchData(`standings/rounds/${round.id}`);

                const teams = await sportmonksService.fetchData(`teams/seasons/${season.id}`);
                const tempTeams: Team[] = [];
                teams.data.forEach((team: any) => {
                    tempTeams.push(new Team(team.id, team.name, team.image_path));
                });

                const tempLeagueStandingsList: LeagueStanding[] = [];
                standings.data.forEach((standing: any) => {
                    const leagueStanding = new LeagueStanding(standing.id, standing.points, tempTeams.find((team) => team.id === standing.participant_id) ?? new Team(standing.participant_id, "Unknown", ""));
                    tempLeagueStandingsList.push(leagueStanding);
                });
                setLeagueStandingsList(tempLeagueStandingsList);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        fetchLeagueStandingsList();
    }, [leagueId]);
    return { leagueStandingsList, loading, error };
};

function findSeason(seasons: any, leagueId: number, currentYearString: string) {
    //select either the season with is_current == true and starting_at < today or the season with the latest starting_at
    let currentSeason;
    let latestSeason = seasons.data[0];
    let i: number = 1;
    let currentStarted: boolean = false;
    
    while (i < seasons.data.length && !currentStarted) {
        if (seasons.data[i].league_id === leagueId) {
            if (seasons.data[i].starting_at > latestSeason.starting_at && !seasons.data[i].is_current) {
                latestSeason = seasons.data[i];
            }
            if (seasons.data[i].is_current) {
                currentSeason = seasons.data[i];
                currentStarted = new Date() > new Date(seasons.data[i].starting_at);
            }
        }
        i++;
    }
    return currentStarted ? currentSeason : latestSeason;
}

function findRound(rounds: any) {
    // Select the round with the highest "name" value (as a number) and "finished" == true
    let round = rounds.data[0];
    rounds.data.forEach((r: any) => {
        if (parseInt(r.name) > parseInt(round.name) && r.finished) {
            round = r;
        }
    });
    return round;
}