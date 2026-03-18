import { ATM } from "../ATM.js"

export class WithdrawalProcessor {
    processor: WithdrawalProcessor | null = null
    constructor(processor: WithdrawalProcessor | null){
        this.processor = processor
    }

    withdraw(atm: ATM, amount: number){
        if(this.processor) {
            this.processor.withdraw(atm, amount)
        }
    }
}