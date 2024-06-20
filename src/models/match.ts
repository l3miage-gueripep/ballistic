import { Team } from "./team";

export class Match {
    constructor(public local_team: Team, public away_team: Team, public date: Date) {}
}