import { ATM } from "../ATM.js";
import { BankAccount } from "../bankAccount.js";
import { FiveHundredProcessor } from "../processor/fiveHundredWithdrawProcessor.js";
import { OneKProcessor } from "../processor/oneKWithdrawProcessor.js";
import { TwoKProcessor } from "../processor/twoKProcessor.js";
import { ATMState } from "./ATMState.js";
import { IdleState } from "./idleState.js";

export class CashWithdrawal extends ATMState {
    withdrawal(atm: ATM, amount: number, bankAccount: BankAccount): void {
        try {

            if(bankAccount.getBalance() < amount){
                throw new Error('Insufficient fund')
            }

            const balanceInAtm = atm.getAtmBalance()
            if(balanceInAtm < amount){
                throw new Error("Insufficient fund in bank")
            }
            const withdrawalProcessor = new TwoKProcessor(new OneKProcessor(new FiveHundredProcessor(null)))
            withdrawalProcessor.withdraw(atm, amount)
            bankAccount.withdrawBalance(amount)
            atm.setAtmState(new IdleState())
            console.log('successfully withdrawl money')
        } catch (error: any) {
            console.log(error?.message)
            throw new Error(error)
        }
    }

    returnCard(atm: ATM){
        console.log('card returned')
    }

    exit(atm: ATM){
        console.log('exited')
        atm.setAtmState(new IdleState())
    }
}