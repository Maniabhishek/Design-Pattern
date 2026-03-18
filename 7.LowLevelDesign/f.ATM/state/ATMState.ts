import { ATM } from "../ATM.js"
import { BankAccount } from "../bankAccount.js"
import { Card } from "../card.js"
import { OPERATIONS } from "./performOperationsState.js"

export abstract class ATMState{
    insertCard(atm: ATM, card: Card): void{
        throw new Error('something went wrong')
    }
    authenticateCard(atm: ATM, card: Card): void{
        throw new Error('something went wrong')
    }
    selectOperations(atm: ATM, operations: OPERATIONS): void{
        throw new Error('something went wrong')
    }
    withdrawal(atm: ATM, amount: number, bankAccount: BankAccount): void{
        throw new Error('something went wrong')
    }
    checkBalance(atm: ATM, bankAccount: BankAccount): number{
        throw new Error('something went wrong')
    }
    returnCard(atm: ATM): void{
        throw new Error('something went wrong')
    }
    exit(atm: ATM): void{
        throw new Error('something went wrong')
    }
}