import { ATM } from "../ATM.js";
import { WithdrawalProcessor } from "./withdrawalProcessor.js";

export class TwoKProcessor extends WithdrawalProcessor{

    constructor(processor: WithdrawalProcessor | null){
        super(processor)
    }

    withdraw(atm: ATM ,amount: number): void {
        try {
            const requiredNotes = Math.floor(amount/2000)
            let balance = amount%2000
            const total2KNotes = atm.getTwoKNotes()
    
            if(requiredNotes <= total2KNotes){
                atm.deductTwoKNotes(requiredNotes)
                atm.deductBalance(requiredNotes*2000)
            }else {
                atm.deductTwoKNotes(total2KNotes)
                atm.deductBalance(total2KNotes * 2000)
                balance += (requiredNotes-total2KNotes)*2000
            }
    
            if(balance != 0){
                super.withdraw(atm, balance)
            }
        } catch (error: any) {
            console.log(error?.message)
            throw Error(error)
        }
    }
}