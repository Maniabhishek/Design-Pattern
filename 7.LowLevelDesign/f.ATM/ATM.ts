import { ATMState } from "./state/ATMState.js";
import { IdleState } from "./state/idleState.js";

export class ATM {
    private static atmObject: ATM = new ATM()
    atmState: ATMState = new IdleState();
    fiveHundredNotesCount: number = 0
    oneKNotesCount: number = 0
    twoKNotesCount: number = 0
    atmBalance: number = 0

    private constructor(){}

    setAtmState(state: ATMState){
        this.atmState = state
    }

    getAtmState(){
        return this.atmState
    }

    static getAtmObject(){
        if(ATM.atmObject) ATM.atmObject = new ATM()
        return ATM.atmObject
    }

    getAtmBalance(){
        return this.atmBalance
    }

    setAtmBalance(fiveHNotes: number, oneKNotes: number, twoKNotes: number){
        this.fiveHundredNotesCount = fiveHNotes
        this.oneKNotesCount = oneKNotes
        this.twoKNotesCount = twoKNotes
        this.atmBalance = 500*fiveHNotes + 1000*oneKNotes + twoKNotes * 2000
    }

    getFiveHundredNotes(){
        return this.fiveHundredNotesCount
    }

    getTwoKNotes(){
        return this.twoKNotesCount
    }

    getOneKNotes(){
        return this.oneKNotesCount
    }

    deductFiveHundredNotes(count: number){
        this.fiveHundredNotesCount -= count
    }

    deductOneKNotes(count: number){
        this.oneKNotesCount -= count
    }

    deductTwoKNotes(count: number){
        this.twoKNotesCount -= count
    }

    deductBalance(amount: number){
        this.atmBalance -= amount
    }

    listAllNotesAndBalanceLeft(){
        console.log(`total five hundred notes: ${this.fiveHundredNotesCount}`)
        console.log(`total one K notes: ${this.oneKNotesCount}`)
        console.log(`total two k notes: ${this.twoKNotesCount}`)
        console.log(`total amount in ATM: ${this.atmBalance}`)
    }
}