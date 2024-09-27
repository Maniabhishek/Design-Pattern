import { IDrive } from "./strategy/driveStrategy";

export class Vehicle {
    drive: IDrive;
    constructor(drive: IDrive){
        this.drive = drive
    }

    Drive(){
        this.drive.drive()
    }
}