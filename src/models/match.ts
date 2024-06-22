import { MatchEvent } from "./match-event";
import { Team } from "./team";

export class Match {
    constructor(public id : number, public local_team: Team, public away_team: Team, public date: string, public events?: MatchEvent[], public local_score? : number, public away_score? : number) {}
    
    static fromApiData(apiData: any): Match {
        //local
        const localTeamData = apiData.participants.find((participant: any) => participant.meta.location === "home");
        const localTeam: Team = new Team(localTeamData.id, localTeamData.name, localTeamData.image_path);
        const localScore: number = apiData.scores.find((score: any) => score.participant_id === localTeam.id && score.description == "2ND_HALF").score.goals;
        //visitor
        const visitorTeamData = apiData.participants.find((participant: any) => participant.meta.location === "away");
        const visitorTeam: Team = new Team(visitorTeamData.id, visitorTeamData.name, visitorTeamData.image_path);
        const visitorScore: number = apiData.scores.find((score: any) => score.participant_id === visitorTeam.id && score.description == "2ND_HALF").score.goals;
        const events: MatchEvent[] = []; 
        if(apiData.events){
            apiData.events.forEach((event: any) => {
                events.push(MatchEvent.fromApiData(event));
            });
            events.sort((a, b) => b.minute - a.minute  || b.extra_minute - a.extra_minute);
        }

        

        return new Match(apiData.id, localTeam, visitorTeam, apiData.starting_at, events, localScore, visitorScore);
    }
}