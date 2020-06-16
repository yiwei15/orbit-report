export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, 
    operational: boolean)   {
        this.name = name;
        this.type = type;
        this.operational = operational;
        this.orbitType = orbitType;
        this.launchDate = launchDate;
    }

    shouldShowWarning() {
        if (this.type === "Space Debris")   {
            return true;
        } else {
            return false;
        }
    }

}
