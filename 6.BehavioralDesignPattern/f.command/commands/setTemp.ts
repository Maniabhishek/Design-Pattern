import { AirConditioner } from "../devices/ac.js";
import { ICommand } from "./iCommand.js";

const tempA: number[] = [24];
export class SetTemperature implements ICommand{
    ac: AirConditioner
    temp: number
    constructor(ac: AirConditioner, temp: number){
        this.ac = ac
        this.temp = temp;
    }

    execute() {
        tempA.push(this.temp)
        console.log(tempA)
        this.ac.setTemp(this.temp)
    }

    undo(){

        if(tempA.length > 1){
            const temp = tempA.pop()
            if(temp){
                this.ac.setTemp(tempA[tempA.length-1]!)
            }
        }
    }
}
