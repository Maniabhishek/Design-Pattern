- command design pattern, as the name itself suggests that whenever you see command being provided, for example, turnOnAC, turnOffAC, turnOnTV, turnOffTV
- this design pattern has three important components:
    - invoker
    - command
    - receiver
- your tv remote is an invoker, it generates the command, and your tv or ac could be a receiver
- lets see design below

```ts
export class AirConditioner {
    isOn: boolean
    temp: number;
    constructor(){
        this.isOn = false;
        this.temp = 24
    }

    turnOn(){
        console.log('ac turned on')
        this.isOn = true
    }

    turnOff(){
        console.log('ac turned off')
    }

    setTemp(temp: number){
        this.temp = temp
        console.log(`temperature set to ${this.temp}`)
    }
}

class client {
    main(){
        const ac = new AirConditioner()
        ac.turnOn()
        ac.setTemp(20)
        ac.turnOff()
    }
}
```
### Problems in above code:
- lack of abstraction (if tomorrow lets say we have do some more functionality to turn on , then client will have to perform those operations as well, client need to know all those functionality)
- difficulty in code maintenance / not scalable (what if tomorrow i have another device, then client code need to be changed again)
- undo/ redo /copy / paste 

#### lets see how we solve the above issue issue command pattern
