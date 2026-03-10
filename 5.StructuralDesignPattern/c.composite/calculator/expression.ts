import { Calculator } from "./Calculator.js";

export enum Operations {
    ADD = 1,
    SUBSTRACT = 2,
    MULTIPLY = 3,
    DIVIDE = 4
}

export class Expression implements Calculator{
    leftExpression: Calculator;
    rightExpression: Calculator;
    operation: Operations
    constructor(leftExpression: Calculator, rightExpression: Calculator, operation: Operations){
        this.leftExpression = leftExpression
        this.rightExpression = rightExpression
        this.operation = operation
    }

    evaluate(): number{
        let value = 0

        switch (this.operation){
            case Operations.ADD:
                value = this.leftExpression.evaluate() + this.rightExpression.evaluate()
                break;
            case Operations.SUBSTRACT:
                value = this.leftExpression.evaluate() - this.rightExpression.evaluate()
                break
            case Operations.MULTIPLY:
                value = this.leftExpression.evaluate() * this.rightExpression.evaluate()
                break
            case Operations.DIVIDE:
                value = this.leftExpression.evaluate() / this.rightExpression.evaluate()
                break
        }
        return value
    }
}
