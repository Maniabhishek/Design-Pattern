import { ATM } from "../ATM.js";
import { Card } from "../card.js";
import { ATMState } from "./ATMState.js";
import { IdleState } from "./idleState.js";
import { PerformOperations } from "./performOperationsState.js";

export class HasCard extends ATMState{
    authenticateCard(atm: ATM, card: Card): void{
        const isAuthenticated = card.autheticatePin(1234)
        if(!isAuthenticated){
            this.returnCard(atm)
            this.exit(atm)
            return
        }
        console.log('successfully authenticated')
        atm.setAtmState(new PerformOperations())
    }

    returnCard(atm: ATM): void{
        console.log('card returned...')
    }

    exit(atm: ATM): void{
        console.log('card returned...')
        atm.setAtmState(new IdleState())
    }
}