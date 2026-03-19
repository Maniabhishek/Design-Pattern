import { ICommand } from "./commands/iCommand.js";
import { SetTemperature } from "./commands/setTemp.js";
import { TurnOnAc } from "./commands/TurnOnAc.js";
import { AirConditioner } from "./devices/ac.js";

class Invoker {
    command: ICommand | null;
    commands: ICommand[] = []
    constructor(){
        this.command = null
    }

    setCommand(command: ICommand){
        this.commands.push(command)
        this.command = command
    }

    pressButton(){
        if(this.command){
            this.command.execute()
        }
    }

    undo(){
        if(this.commands.length){
            const lastCommand = this.commands.pop()
            if(lastCommand){
                lastCommand.undo()
            }
        }
    }
}

export function CallCommandDP(){
    const remote = new Invoker()
    remote.setCommand(new TurnOnAc(new AirConditioner()))
    remote.pressButton()

    remote.setCommand(new SetTemperature(new AirConditioner(), 20))
    remote.pressButton()

    remote.setCommand(new SetTemperature(new AirConditioner(), 30))
    remote.pressButton()

    remote.undo()
    remote.undo()
    remote.undo()
}
