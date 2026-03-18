import { BankAccount } from "./bankAccount.js";

export class Card {
    cvv: number;
    cardNumber: number;
    bankAccount: BankAccount;
    holderName: string;
    pin: number;

    constructor(pin: number, holderName: string, cvv: number, cardNumber: number, bankAccount: BankAccount){
        //assuming it fetches pin from server
        this.pin = pin;
        this.holderName = holderName;
        this.cvv = cvv;
        this.cardNumber = cardNumber;
        this.bankAccount = bankAccount
    }

    autheticatePin(pin: number){
        return this.pin === pin
    }

    withdrawBalance(amount: number){
        this.bankAccount.withdrawBalance(amount)
    }

    setBankAccount(ba: BankAccount){
        this.bankAccount = ba
    }
}