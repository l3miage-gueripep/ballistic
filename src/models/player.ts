export class Player {
    constructor(public id: number, public firstname: string, public lastname: string, public display_name: string, public face_image: string, public position: Position, public country_flag: string, public date_of_birth: string) { }
    public getAge(): number {
        const today = new Date();
        const birthDate = new Date(this.date_of_birth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
};



export enum Position {
    Goalkeeper = "Goalkeeper",
    Defender = "Defender",
    Midfielder = "Midfielder",
    Forward = "Attacker"
};