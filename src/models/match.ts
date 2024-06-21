import { Team } from "./team";

export class Match {
    constructor(public id : number, public local_team: Team, public away_team: Team, public date: Date, public local_score? : number, public away_score? : number) {}
}