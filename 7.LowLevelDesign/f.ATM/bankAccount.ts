export class BankAccount {
    balance: number;

    constructor(balance: number){
        this.balance = balance
    }

    withdrawBalance(amount : number){
        this.balance = this.balance - amount
    }

    getBalance(){
        return this.balance
    }
}