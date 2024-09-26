import { Sports } from "./strategy/sportDrive";
import { Vehicle } from "./vehicle";

export class SportsVehicle extends Vehicle {
    constructor(){
        super(new Sports)
    }

    sportsDrive(){
        this.Drive()
    }
}