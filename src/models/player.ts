export class Player {
    constructor(public id: number, public face_image: string, public name: string, public position: Position, public country_flag: string) { }
};

export enum Position {
    Goalkeeper = "Goalkeeper",
    Defender = "Defender",
    Midfielder = "Midfielder",
    Forward = "Attacker"
};