import { Inventory } from "./inventory.js";
import { Item } from "./item.js";
import { ItemShelf } from "./ItemShelf.js";
import { VendingMachine } from "./vending-machine.js";

class Main {
    vendingMachine: VendingMachine | null = null;
    constructor(){
        this.vendingMachine = null
    }
    initialize(){
        this.vendingMachine =  new VendingMachine(3)

        const itemShelf1 = new ItemShelf(1, 3)
        const item1 = new Item(1, 'coke', 5)
        const item2 = new Item(2, 'juice', 10)
        const item3 = new Item(3, 'biscuit', 5)
        itemShelf1.addItem(item1)
        itemShelf1.addItem(item2)
        itemShelf1.addItem(item3)

        const itemShelf2 = new ItemShelf(2,3)
        const item4 = new Item(4, 'coke', 5)
        const item5 = new Item(5, 'juice', 10)
        const item6 = new Item(6, 'biscuit', 5)
        itemShelf2.addItem(item4)
        itemShelf2.addItem(item5)
        itemShelf2.addItem(item6)

        const itemShelf3 = new ItemShelf(2,3)
        const item7 = new Item(7, 'coke', 5)
        const item8 = new Item(8, 'juice', 10)
        const item9 = new Item(9, 'biscuit', 5)
        itemShelf3.addItem(item7)
        itemShelf3.addItem(item8)
        itemShelf3.addItem(item9)


        this.vendingMachine.inventory.addShelves(0, itemShelf1)
        this.vendingMachine.inventory.addShelves(1, itemShelf2)
        this.vendingMachine.inventory.addShelves(2,itemShelf3)

        //list all the inventory
        this.vendingMachine.listInventory()

        let vendingState = this.vendingMachine.getState()
        vendingState.pressInsertCointButton(this.vendingMachine)

        vendingState = this.vendingMachine.getState()

        vendingState.insertCoin(this.vendingMachine, {FIVE: 1})

        vendingState.pressSelectionButton(this.vendingMachine)

        vendingState = this.vendingMachine.getState()

        vendingState.selectProduct(this.vendingMachine, 1)

        
        // or directly use this.vendingMachine.state (if dont want to use getState every time)
        this.vendingMachine.state.dispense(this.vendingMachine)
        //list all the inventory
        this.vendingMachine.listInventory()
    }
}

export function CallVendingMachine(){
    const main = new Main()
    main.initialize()
}