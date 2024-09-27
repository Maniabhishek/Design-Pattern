//this is vehicle class with few class attributes and drive method inside
export class Vehicle {
    wheels: number;
    type: string

    constructor(wheels: number,type: string){
        this.wheels = wheels
        this.type = type
    }

    drive(){
        console.log('drive vehicle')
    }
}