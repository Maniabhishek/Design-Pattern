
import { COIN } from "../coin.js";
import { VendingMachine } from "../vending-machine.js";
import { Dispense } from "./dispense.js";
import { IdleState } from "./idleState.js";
import { State } from "./state.js";

export class Selection implements State {
    coins: Record<string, number> | null = {}
    name: string;
    constructor(name: string){
        this.name = name
    }
    pressInsertCointButton(): void{
        throw new Error('not allowed');
    }
    insertCoin(vendingMachine: VendingMachine, coins: Record<string, number>): void{
        throw new Error('not allowed')
    }
    pressSelectionButton(): void{
        throw new Error('not allowed')
    }
    selectProduct(vendingMachine: VendingMachine, code: number): void {
        try {
            console.log('slected product')
            const inventory = vendingMachine.getInventory()
            const item = inventory.getItem(code)
            if(!item){
                throw new Error("invalid product")
            }
            const total = vendingMachine.getTotalAmountInserted()
            console.log('selectedItem',item.name, item.price, total)
            if(item.getPrice() > total){
                throw new Error('insufficient fund')
            }
            vendingMachine.setSelecedItem(item)
            vendingMachine.setState(new Dispense('DISPENSE'))
        } catch (error: any) {
            console.log(`error: ${error?.message}`)
        }
    }
    cancelTransaction(vendingMachine: VendingMachine): void{
        console.log('cancelled product')
        this.refundMoney(vendingMachine)
        vendingMachine.setState(new IdleState('IDLE'))
    }
    refundMoney(vendingMachine: VendingMachine): void{
        console.log('refunding money')
        vendingMachine.currentInsertedCoins = null
        vendingMachine.setState(new IdleState('IDLE'))
    }
    returnChange(): COIN | null{
        throw new Error('not allowed')
    }
    dispense(): void {
        throw new Error('not allowed')
    }
    getName(): string{
        return this.name
    }
}