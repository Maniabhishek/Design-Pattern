import { ATM } from "../ATM.js";
import { WithdrawalProcessor } from "./withdrawalProcessor.js";

export class OneKProcessor extends WithdrawalProcessor{

    constructor(processor: WithdrawalProcessor| null){
        super(processor)
    }

    withdraw(atm: ATM ,amount: number): void {
        try {
            const requiredNotes = Math.floor(amount/1000)
            let balance = amount%1000
            const total1KNotes = atm.getOneKNotes()
    
            if(requiredNotes <= total1KNotes){
                atm.deductOneKNotes(requiredNotes)
                atm.deductBalance(requiredNotes*1000)
            }else {
                atm.deductOneKNotes(total1KNotes)
                atm.deductBalance(total1KNotes * 1000)
                balance += (requiredNotes-total1KNotes)*1000
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