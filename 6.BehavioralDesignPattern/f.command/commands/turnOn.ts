import { AirConditioner } from "../devices/ac.js";
import { ICommand } from "./iCommand.js";

export class TurnOnAc implements ICommand {
    ac: AirConditioner;
    constructor(ac: AirConditioner){
        this.ac = ac
    }

    execute(): void {
        this.ac.turnOn()
    }

    undo(){
        this.ac.turnOff()
    }
}
