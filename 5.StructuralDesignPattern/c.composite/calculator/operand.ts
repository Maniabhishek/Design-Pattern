import { Calculator } from "./Calculator.js";

export class Operand implements Calculator {
    num: number
    constructor(num: number){
        this.num = num
    }

    evaluate(): number {
        console.log('number is: ', this.num)
        return this.num
    }
}
