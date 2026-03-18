import { ATM } from "../ATM.js";
import { WithdrawalProcessor } from "./withdrawalProcessor.js";

export class FiveHundredProcessor extends WithdrawalProcessor{

    constructor(processor: WithdrawalProcessor | null){
        super(processor)
    }

    withdraw(atm: ATM ,amount: number): void {
        try {
            console.log('running FiveHundred Processor amount to withdraw: ', amount)
            const requiredNotes = Math.floor(amount/500)
            let balance = amount%500
            const total5HNotes = atm.getFiveHundredNotes()
    
            if(requiredNotes <= total5HNotes) {
                atm.deductFiveHundredNotes(requiredNotes)
                atm.deductBalance(requiredNotes*500)
            }else {
                atm.deductFiveHundredNotes(total5HNotes)
                atm.deductBalance(total5HNotes * 500)
                balance += (requiredNotes-total5HNotes)*500
            }
    
            if(balance != 0){
                throw new Error('ERROR: notes not enough')
            }
        } catch (error: any) {
            console.log(error?.message)
            throw new Error(error)
        }
    }
}