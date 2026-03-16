import { COIN } from "../coin.js";
import { VendingMachine } from "../vending-machine.js";
import { IdleState } from "./idleState.js";
import { State } from "./state.js";


export class Dispense implements State{
    name: string;
    constructor(name: string){
        this.name = name
    }
    pressInsertCointButton(): void{
        throw new Error('not allowed');
    }
    insertCoin(vendingMachine: VendingMachine, coin: Record<string, number>): void{
        throw new Error('not allowed')
    }
    pressSelectionButton(): void{
        throw new Error('not allowed')
    }
    selectProduct(vendingMachine: VendingMachine, code: number): void{
        throw new Error('not allowed')
    }
    cancelTransaction(vendingMachine: VendingMachine): void{
        vendingMachine.setState(new IdleState('IDLE'))
        console.log('transaction cancelled')
    }
    refundMoney(): void{
        throw new Error('not allowed')
    }
    returnChange(vendingMachine: VendingMachine): COIN | null{
        try {
            const totalInsertedAmount = vendingMachine.getTotalAmountInserted()
            if(vendingMachine.selectedItem?.getPrice() === totalInsertedAmount){
                console.log('no need to change')
                return null
            }
    
            const itemPrice = vendingMachine.selectedItem?.getPrice()
            if(!itemPrice){
                console.log('item price is invalid')
                throw new Error('item price is invalid')
            }
    
            let refundAmount = totalInsertedAmount - vendingMachine.selectedItem?.getPrice()!
            let tenCount = 0
            if(refundAmount > 10){
                tenCount = Math.floor(refundAmount/10)
                refundAmount = refundAmount%10
            }

            let fiveCount = 0
            if(refundAmount > 5){
                fiveCount = Math.floor(refundAmount/5)
                refundAmount = refundAmount%5
            }

            if(refundAmount > 0){
                throw new Error(' we dont have enough coins to change , select other product or take refund')
            }

            vendingMachine.removeCoins({FIVE: fiveCount, TEN: tenCount})
            console.log('change amount: ', 5*fiveCount + 10 * tenCount)
            return 5*fiveCount + 10 * tenCount
        } catch (error: any) {
            console.log('error: ', error?.message)
            throw new Error(error?.message)
        }
    }
    dispense(vendingMachine: VendingMachine): void {
        try {
            console.log('dispensing product')
            const inventory = vendingMachine.getInventory()
            const selectedItem = vendingMachine.getSelectedItem()
            if(!selectedItem){
                throw new Error('no product selected')
            }
            const isDispersed = inventory.disperseItem(selectedItem.code)
            if(isDispersed){
                console.log('successfully dispersed')
            }else {
                throw new Error('something went wrong')
            }
            vendingMachine.setState(new IdleState('IDLE'))
        } catch (error: any) {
            console.log(error)
            throw new Error(error?.message)
        }
    }

    getName(): string{
        return this.name
    }
}