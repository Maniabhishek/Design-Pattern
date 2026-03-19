import { AirConditioner } from "../devices/ac.js";
import { ICommand } from "./iCommand.js";

export class TurnOffAC implements ICommand {
    ac: AirConditioner;
    constructor(ac: AirConditioner){
        this.ac = ac
    }

    execute(): void {
        this.ac.turnOff()
    }

    undo(){
        this.ac.turnOn()
    }
}
