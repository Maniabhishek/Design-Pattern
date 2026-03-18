import { BankAccount } from "./bankAccount.js";
import { Card } from "./card.js";

export class User {
    name: string;
    card: Card;
    bankAccount: BankAccount;

    constructor(name: string, card: Card, ba: BankAccount){
        this.card = card;
        this.bankAccount = ba;
        this.name = name
    }

    getCard(){
        return this.card
    }

    setCard(card: Card){
        this.card = card
    }
}