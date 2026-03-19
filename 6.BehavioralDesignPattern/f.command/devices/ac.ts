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
        this.isOn = false
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
