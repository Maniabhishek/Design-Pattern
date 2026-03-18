import { ATM } from "./ATM.js";
import { BankAccount } from "./bankAccount.js";
import { Card } from "./card.js";
import { OPERATIONS } from "./state/performOperationsState.js";
import { User } from "./user.js";

class Index {
    atm: ATM;
    user: User | null = null;

    constructor(){
        this.atm = ATM.getAtmObject()
    }

    initialize(){
        this.atm.setAtmBalance(10, 5, 5)
        this.atm.listAllNotesAndBalanceLeft()
        const ba = new BankAccount(5000)
        const card = new Card(1234, 'test user', 123, 23413513513, ba)
        this.createUser(card, ba)

        let atmState = this.atm.getAtmState()
        atmState.insertCard(this.atm, card)

        // authenticate
        atmState = this.atm.getAtmState()
        atmState.authenticateCard(this.atm, card)

        // select operations
        atmState = this.atm.getAtmState()
        atmState.selectOperations(this.atm, OPERATIONS.WITHDRAWAL)

        // perform operation
        atmState = this.atm.getAtmState()
        atmState.withdrawal(this.atm, 2500, ba)

        this.atm.listAllNotesAndBalanceLeft()

        // get back the card and exit
        atmState.returnCard(this.atm)
        atmState.exit(this.atm)

        atmState = this.atm.getAtmState()
        atmState.insertCard(this.atm, card)
    }

    createUser(card: Card, ba: BankAccount){
        this.user = new User('test user', card, ba)
    }

    createCard( holderName: string, cvv: number, cardNumber: number, ba: BankAccount){
        const pin = 1234
        return new Card(pin, holderName, cvv, cardNumber, ba)
    }
}

export function WithdrawMoneyFromATM(){
    const atmRoom = new Index()
    atmRoom.initialize()
}