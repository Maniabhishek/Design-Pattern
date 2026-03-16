
import { COIN } from "../coin.js";
import { VendingMachine } from "../vending-machine.js";
import { EnterMoney } from "./EnterMoney.js";
import { State } from "./state.js";

export class IdleState implements State {
    name: string;
    constructor(name: string){
        this.name = name
    }
    pressInsertCointButton(vendingMachine: VendingMachine): void{
        console.log('insert coin button clicked');
        vendingMachine.setState(new EnterMoney('Enter Money'))
    }
    insertCoin(vendingMachine: VendingMachine, coins: Record<string, number>): void{
        throw new Error('not allowed')
    }
    pressSelectionButton(): void{
        throw new Error('not allowed')

    }
    selectProduct(vendingMachine: VendingMachine, code: number): void{
        throw new Error('not allowed')
    }
    cancelTransaction(vendingMachine: VendingMachine): void{
        throw new Error('not allowed')
    }
    refundMoney(vendingMachine: VendingMachine): void{
        throw new Error('not allowed')
    }
    returnChange(vendingMachine: VendingMachine): COIN | null{
        throw new Error('not allowed')
    }
    dispense(): void{
        throw new Error('not allowed')
    }
    getName(): string{
        return this.name
    }
}