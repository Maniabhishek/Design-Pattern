import { Card } from "../card.js";
import { ATMState } from "./ATMState.js";
import { ATM } from "../ATM.js";
import { HasCard } from "./hasCardState.js";

export class IdleState extends ATMState{
    insertCard(atm: ATM, card: Card): void{
        console.log('Idle state: card inserted...')
        console.log(`welcome: ${card.holderName}`)
        atm.setAtmState(new HasCard())
    }
}