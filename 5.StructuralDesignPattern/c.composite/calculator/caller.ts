import { Expression, Operations } from "./expression.js";
import { Operand } from "./operand.js";

export function CallCalculator(){
    const two = new Operand(2)
    const three = new Operand(3)
    const add2and3 = new Expression(two, three, Operations.ADD)

    const seven = new Operand(7)

    const total = new Expression(seven, add2and3, Operations.MULTIPLY)
    const res = total.evaluate()
    console.log(res)
}
