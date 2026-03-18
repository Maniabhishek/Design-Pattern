import { ATM } from "../ATM.js";
import { ATMState } from "./ATMState.js";
import { CashWithdrawal } from "./cashWithdrawal.js";
import { CheckBalance } from "./checkBalance.js";
import { IdleState } from "./idleState.js";

export enum OPERATIONS {
    WITHDRAWAL = 1,
    CHECK_BALANCE = 2
}

export class PerformOperations extends ATMState{
    selectOperations(atm: ATM, operations: OPERATIONS): void{
        console.log('Selecting operations')
        switch (operations) {
            case OPERATIONS.WITHDRAWAL:
                atm.setAtmState(new CashWithdrawal())
                return
            case OPERATIONS.CHECK_BALANCE:
                atm.setAtmState(new CheckBalance())
            default:
                throw new Error('invalid operation')
        }
    }

    exit(atm: ATM): void{
        console.log('card returned...')
        atm.setAtmState(new IdleState())
    }
}