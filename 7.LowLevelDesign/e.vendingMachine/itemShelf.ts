import { Item } from "./item.js";

export class ItemShelf {
    items: Item[] = [];
    id: number;
    capacity: number;
    currentCount: number = 0
    constructor(id: number, capacity: number){
        this.id = id;
        this.capacity = capacity
    }

    addItem(item: Item) {
        if(this.currentCount >= this.capacity) throw new Error('item shelf is full')
        console.log(`adding item with name:${item.name} and price: ${item.price}`)
        this.items.push(item)
        this.currentCount++
    }

    disperseItem(code: number): boolean{
        let isDispersed = false
        const updatedItems = []
        for(const item of this.items){
            if(item.code === code){
                isDispersed = true
                this.currentCount--
            }else {
                updatedItems.push(item)
            }
        }
        this.items = updatedItems
        return isDispersed
    }

    isShelfEmpty(){
        return this.currentCount === 0
    }

    getItems(){
        return this.items
    }

    getItem(code: number){
        for(const item of this.items){
            if(item.code === code){
                return item
            }
        }
    }
}