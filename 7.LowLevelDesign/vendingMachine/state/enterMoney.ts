
import { COIN } from "../coin.js";
import { VendingMachine } from "../vending-machine.js";
import { Selection } from "./Selection.js";
import { State } from "./state.js";

export class EnterMoney implements State{
    coins: Record<string, number> | null= {}
    name: string;
    constructor(name: string){
        this.name = name
    }
    pressInsertCointButton(): void{
        throw new Error('not allowed');
    }
    insertCoin(vendingMachine: VendingMachine, coins: Record<string, number>): void{
        console.log('inserted coin')
        this.coins = coins
        vendingMachine.currentInsertedCoins = coins
        vendingMachine.updateCoins(coins)
    }
    pressSelectionButton(vendingMachine: VendingMachine): void{
        console.log('pressed select product button')
        vendingMachine.setState(new Selection("SELECTION"))
    }
    selectProduct(vendingMachine: VendingMachine, code: number): void{
        throw new Error('not allowed')
    }
    cancelTransaction(): void{
        throw new Error('not allowed')
    }
    refundMoney(vendingMachine: VendingMachine): void{
        throw new Error('not allowed')
    }
    returnChange(): COIN | null{
        throw new Error('not allowed')
    }
    dispense(): void{
        throw new Error('not allowed')
    }
    getName(): string{
        return this.name
    }
}