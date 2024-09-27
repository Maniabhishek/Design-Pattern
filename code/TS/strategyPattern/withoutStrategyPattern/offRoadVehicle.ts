import { Vehicle } from "./vehicle";

// the problem here comes that we have two child class that extends vehicle class let's assume both child class overrides drive method and both has similar functinality then you end repeating the same code 
// you can't reuse it this can be solved using strategy pattern
export class OffRoadVehicle extends Vehicle{
    drive(){
        console.log('Off road vehicle drive')
    }
}