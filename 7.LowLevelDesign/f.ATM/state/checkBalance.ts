import { ATM } from "../ATM.js";
import { BankAccount } from "../bankAccount.js";
import { ATMState } from "./ATMState.js";
import { IdleState } from "./idleState.js";

export class CheckBalance extends ATMState {
    checkBalance(atm: ATM, bankAccount: BankAccount): number {
        return bankAccount.getBalance()
    }

    returnCard(atm: ATM): void {
        console.log('card rturned...')
    }
    exit(atm: ATM): void {
        console.log('exited..')
        atm.setAtmState(new IdleState())
    }
}